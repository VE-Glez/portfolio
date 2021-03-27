import os
import re
from pathlib import Path
from shutil import copyfile
import json

os.chdir('/home/veglez/Projects/frontend/frontendmentor')
dinamicImport = 'import {0} from "../pages/frontendmentor/{0}"'
actual = Path.cwd()
pDesign = re.compile('design')
pFiles = re.compile(r'-design[\w-]*\.jpg')
results = []
rutas = {
    #"key": (import, component, path),
}
for root, dirs, files in os.walk('./'):
    item = {}         #projectsData.json
    toRoot = root.split('/')
    project_Acronym = ''    #projectsData.json
    if pDesign.search(root):
        projectName = root.split('/')[1].split('-') 
        capitalizedProjectName = ' '.join(map(lambda x: x.capitalize(), projectName ))
        print(capitalizedProjectName)
        component_name = capitalizedProjectName.replace(' ', '')
        for word in projectName:
            project_Acronym += word[0].upper()
        for img in files:
            if pFiles.search(img):
                src = Path.joinpath(actual, toRoot[1],toRoot[2], img)
                output = Path.joinpath(actual, 'allImages',project_Acronym+'-'+img)
                copyfile(src, output)
                output2 = Path('/home/veglez/Projects/portfolio/with-react/public/projects', project_Acronym+'-'+img)
                copyfile(src, output2)
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
                print( image)
                if image[:-3] == 'svg':
                    imageName = image.split('/')[1].split('-') 
                    PascalCaseFullSvgName = ''.join(map(lambda x: x.capitalize(), projectName ))
                    print(capitalizedProjectName)



ruta_portafolio = Path('/home/veglez/Projects/portfolio/with-react')
#Genera los datos necesarios para poner las Cards en la pagina "projects"
filename_json = 'projectsData.json'
json_output = Path.joinpath(actual, 'allImages', filename_json)
with open(json_output, 'w') as f:
    json.dump({"results": results}, f)
output_path_to_porfolio_json = Path(ruta_portafolio,'src/utils',filename_json)
copyfile(json_output, output_path_to_porfolio_json)

imports = ''
variable = ''
filename_routes = 'routes.js'
routes_file = Path.joinpath(actual, 'allImages', filename_routes) 
with open(routes_file, 'w') as routesFile:
    routesFile.seek(0)
    routesFile.truncate(0)
    for key, item in rutas.items():
        imports += item[0]+';\n'
        variable += '  {{ component: {0}, path: "{1}"}},\n'.format(item[1], item[2])
    final_text = "{0}\nconst routes = [\n{1}];\n\nexport default routes;".format(imports, variable)
    routesFile.write(final_text)
output_path_to_porfolio_routes = Path(ruta_portafolio,'src/utils',filename_routes)
copyfile(routes_file, output_path_to_porfolio_routes)


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
