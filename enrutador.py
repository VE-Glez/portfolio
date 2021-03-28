import os
import re
from pathlib import Path
from shutil import copyfile
import json
os.chdir('/home/veglez/Projects/frontend/frontendmentor')

ruta_portafolio = Path('/home/veglez/Projects/portfolio/with-react')
dinamicImport = 'import {0} from "../pages/frontendmentor/{0}"'




actual = Path.cwd()
isProject = re.compile(r'^\.\/(?:[a-z]+-)+[a-z]+$')
pFiles = re.compile(r'-design[\w-]*\.jpg')
results = []
rutas = {
    #"key": (import, component, path),
}

def HTML_to_React_attributes(svg):
    pattern = re.compile(r'([a-z]+-[a-z]+)')
    attrs = pattern.findall(svg)
    if attrs:
        for attr in attrs:
            init, *parts= attr.split('-') 
            camelCase = ''.join([init, *map(str.capitalize, parts)])
            svg = svg.replace(attr, camelCase)
    return svg


def createSVGJSX(image, root, acronnym ):
    imageName = image[:-4].split('-') 
    PascalCaseFullSvgName = ''.join(map(lambda x: x.capitalize(), imageName ))
    svg_file = ''.join([root, '/', image])
    with open(svg_file, 'r') as svg:
        tags = svg.read()
    tags = HTML_to_React_attributes(tags)
    svg_layout = """import React from 'react'
            
const {PascalNameSVG} () =>{{
    {contenidoSVG}
}};

export default {PascalNameSVG};"""
    output_to_local = Path.cwd().joinpath('outputTree','src/components', acronnym)
    if not output_to_local.exists():
        output_to_local.mkdir(parents=True)
    file_output = output_to_local.joinpath(PascalCaseFullSvgName+'.jsx')
    with open(file_output, 'w') as thisJSX:
        thisJSX.write(svg_layout.format(PascalNameSVG = PascalCaseFullSvgName, contenidoSVG = tags))
    output_to_portfolio = Path(ruta_portafolio,'src/components',acronnym, PascalCaseFullSvgName+'.jsx')
    if output_to_portfolio.exists():
        print("ya existe: {}".format(output_to_portfolio))
    # else:
    #     # print("no existe: {}".format(output_to_portfolio))
    #     pass

for root, dirs, files in os.walk('./'):
    item = {}         #projectsData.json
    if isProject.search(root):
        # print(root, dirs)
        project_Acronym = ''    #projectsData.json
        projectName = root.split('/')[1].split('-') 
        capitalizedProjectName = ' '.join(map(lambda x: x.capitalize(), projectName ))
        # print(capitalizedProjectName)
        component_name = capitalizedProjectName.replace(' ', '')
        for word in projectName:
            project_Acronym += word[0].upper()
        print(project_Acronym)
    if 'design' in root:
        for img in files:
            if pFiles.search(img):
                src = Path.joinpath(actual, root, img)
                output_to_local = Path.joinpath(actual, 'outputTree','public/projects')
                if not output_to_local.exists():
                    output_to_local.mkdir(parents=True)
                output_to_local = Path.joinpath(output_to_local,project_Acronym+'-'+img)
                if not output_to_local.exists():
                    print('no existe. Creando {}'.format(output_to_local))
                    copyfile(src, output_to_local)            
                output_to_portfolio = Path(ruta_portafolio, 'public/projects', project_Acronym+'-'+img)
                if not output_to_portfolio.exists():
                    print('no existe. Creando {}'.format(output_to_portfolio))
                    copyfile(src, output_to_portfolio)
                key = img.split('-')[0]
                source = './projects/{0}-{1}'.format(project_Acronym, img)
                item[key] = source
        item['id'] = project_Acronym
        item['title'] = capitalizedProjectName
        item['path'] = '/projects/{0}'.format(project_Acronym)
        results.append(item)
        rutas[project_Acronym] = (dinamicImport.format(component_name), component_name, '/projects/{0}'.format(project_Acronym) )
    if 'images' in root:
        for image in files:
            if 'favicon' not in image:
                # print( image)
                if image[-3:] == 'svg' and 'bg' not in image:
                    createSVGJSX(image, root, project_Acronym)
                # else:
                #     copyfile()






#Genera los datos necesarios para poner las Cards en la pagina "projects"
filename_json = 'projectsData.json'
json_output = Path.joinpath(actual, 'outputTree', filename_json)
with open(json_output, 'w') as f:
    json.dump({"results": results}, f)
output_path_to_porfolio_json = Path(ruta_portafolio,'src/utils',filename_json)
# copyfile(json_output, output_path_to_porfolio_json)

imports = ''
variable = ''
filename_routes = 'routes.js'
routes_file = Path.joinpath(actual, 'outputTree', filename_routes) 
with open(routes_file, 'w') as routesFile:
    routesFile.seek(0)
    routesFile.truncate(0)
    for key, item in rutas.items():
        imports += item[0]+';\n'
        variable += '  {{ component: {0}, path: "{1}"}},\n'.format(item[1], item[2])
    final_text = "{0}\nconst routes = [\n{1}];\n\nexport default routes;".format(imports, variable)
    routesFile.write(final_text)
output_path_to_porfolio_routes = Path(ruta_portafolio,'src/utils',filename_routes)
# copyfile(routes_file, output_path_to_porfolio_routes)


# HASTA AQUI LO QUE SUCEDE ES:
#     1. Itera en la carpeta de "frontendmentor" para obtener las imagenes
#     2. Selecciona las imagenes necesarias y obtiene los datos para generar 2 archivos:
#         2.1 "projectData.json" sirve para mostrar en la ruta "/projects" los proyectos hechos
#         2.2 "routes.js" sirve para el enturado

# Para que todo funcione correctamente debe existir un componente página con el nombre COMPLETO del proyecto



#ahora lo que falta....
# Por cada carpeta llamada imagenes obtener las imagenes, excluir favicon-32x32.png
#por cada png o jpg copiará el archivo a la carpeta Path.joinpath(ruta_portafolio, 'public/frontendmentor', )
#por cada SVG:
    #1.Guardarlo su contenido (el html) en un archivo .jsx ubicado en Path.joinpath(ruta_portafolio, 'src/components', project_Acronym)
    #2.Cambiar sus atributos a camelCase (si aplica) ejemplo:
    #   2.1 Convertir stroke-width --> strokeWidth 
    #El formato del nuevo svg.jsx debe ser:
        # import React from 'react'
        # const PascalCaseFullSvgName = () => {
        #     return (
        #         <svg>
        #           ...
        #         </svg>
        #     );
        # };
        # export default PascalCaseFullSvgName;


#LINEA 44 SACAR LA FUNCION DE AHÍ