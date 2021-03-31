import os
import re
from pathlib import Path
from shutil import copyfile
import json
os.chdir('/home/veglez/Projects/frontend/frontendmentor')

ruta_portafolio = Path('/home/veglez/Projects/portfolio/with-react')
dinamicImport = 'import {0} from "../pages/frontendmentor/{0}"'
dinamic_page_imports= ''



actual = Path.cwd()
isProject = re.compile(r'^\.\/(?:[a-z]+-)+[a-z]+$')
pFiles = re.compile(r'-design[\w-]*\.jpg')
results = []
rutas = {
    #"key": (import, component, path),
}


def createPageComponent(name_of_page_component, dinamic_page_imports, stylesheet_acronnym, mainText):
    component_layout = '''
    import React from "react";
    import Styles from "{style}";
    {icons}
    
    const {component_name} = () => {{
    return(
            <main className={{Styles.container}}>
            <h1> Estas en la página {component_name} </h1>
            <section>{mainContent}</section>
            </main>
        );
    }};
    
    export default {component_name};'''.format(component_name=name_of_page_component, icons=dinamic_page_imports, style='../../styles/pages/frontendmentor/{0}.module.scss'.format(stylesheet_acronnym), mainContent=mainText)
    #esto se repite para producion tambien pero verificar si ya existe para no sobreescribirlos
    output_to_local = Path(actual, 'outputTree/src/pages/frontendmentor')
    if not output_to_local.exists():
        output_to_local.mkdir(parents=True)
    output_to_local = output_to_local.joinpath(name_of_page_component+'.jsx')
    if not output_to_local.exists():
        print("No existe {0}, se está creando por primera vez".format(output_to_local))
        with open(output_to_local,'w') as page:
            page.write(component_layout)
    stylesheet_to_local = Path(actual, 'outputTree/src/styles/pages/frontendmentor')
    if not stylesheet_to_local.exists():
        stylesheet_to_local.mkdir(parents=True)
    stylesheet_to_local = stylesheet_to_local.joinpath(stylesheet_acronnym+'.module.scss')
    if not stylesheet_to_local.exists():
        print('No existe {0}, se está creando por primera vez'.format(stylesheet_to_local))
        stylesheet_to_local.touch()
    #esto se repite para producion tambien pero verificar si ya existe para no sobreescribirlos
    output_to_portfolio = Path(ruta_portafolio, 'src/pages/frontendmentor')
    if not output_to_portfolio.exists():
        output_to_portfolio.mkdir(parents=True)
    output_to_portfolio = output_to_portfolio.joinpath(name_of_page_component+'.jsx')
    if not output_to_portfolio.exists():
        print("No existe {0}, se está creando por primera vez".format(output_to_portfolio))
        with open(output_to_portfolio,'w') as page:
            page.write(component_layout)
    stylesheet_to_portfolio = Path(ruta_portafolio, 'src/styles/pages/frontendmentor')
    if not stylesheet_to_portfolio.exists():
        stylesheet_to_portfolio.mkdir(parents=True)
    stylesheet_to_portfolio = stylesheet_to_portfolio.joinpath(stylesheet_acronnym+'.module.scss')
    if not stylesheet_to_portfolio.exists():
        print('No existe {0}, se está creando por primera vez'.format(stylesheet_to_portfolio))
        stylesheet_to_portfolio.touch()


def replaceRegex(text):
    beforeWidth = 'beforeWidth'
    widthHeight = 'widthHeight'
    widthValue = 'widthValue'
    heightValue = 'heightValue'
    viewbox = 'viewbox'
    viewboxValue= 'viewboxValue'
    patronWidthHeight = r'(?:<svg[\w\/\-}=:"{\.\s]+)(?P<widthHeight>width="(?P<widthValue>[\d\.]+)"\s+height="(?P<heightValue>[\d\.]+)")|(?P<viewbox>viewbox="(?P<viewboxValue>[\w\.\s]+)")'
    patternWidthHeight = re.compile(patronWidthHeight)
    matchWidthHeight = patternWidthHeight.search(text)
    vhStart, vhEnd = matchWidthHeight.span(widthHeight)
    wvStart, wvEnd = matchWidthHeight.span(widthValue)
    wStart,wEnd = matchWidthHeight.span(widthValue)
    hStart, hEnd = matchWidthHeight.span(heightValue)
    beforeWH = text[:vhStart]
    afterWH = text[vhEnd: ]
    newText = 'preserveAspectRatio="xMinYMin slice" viewBox="0 0 {width} {height}"'.format(width=text[wStart:wEnd], height=text[hStart:hEnd])
    # print(newText)
    #empieza verificacion del viewbox
    # patronViewbox = r'(?:<svg[\w\/\-}=:"{\.\s]+)(?P<viewbox>viewbox="(?P<viewboxValue>[\w\.\s]+)")'
    # patternViewbox = re.compile(patronViewbox)
    # matchViewbox = patternViewbox.search(text)
    return beforeWH+newText+afterWH


def HTML_to_React_attributes(svg):
    svg = replaceRegex(svg)
    pattern = re.compile(r'([a-z]+-[a-z]+)')
    pattern1= re.compile(r'([a-z]+:[a-z]+)')
    patterns = [(pattern,'-'), (pattern1,':')]
    for p in patterns:
        attrs = p[0].findall(svg)
        if attrs:
            attrs = set(attrs)
            for attr in attrs:
                init, *parts= attr.split(p[1]) 
                camelCase = ''.join([init, *map(str.capitalize, parts)])
                svg = svg.replace(attr, camelCase)
    svg = svg.replace('<svg', '<svg className={{className}}'.format('className'))
    return svg


def createSVGJSX(image, root, acronnym ):
    imageName = image[:-4].split('-') 
    PascalCaseFullSvgName = ''.join(map(lambda x: x.capitalize(), imageName ))
    svg_file = ''.join([root, '/', image])
    with open(svg_file, 'r') as svg:
        tags = svg.read()
    tags = HTML_to_React_attributes(tags)
    svg_layout = """import React from "react";
            
    const {PascalNameSVG} = ({{className}}) =>{{
    return(
        {contenidoSVG}
    )
    }};

    export default {PascalNameSVG};"""
    output_to_local = Path.cwd().joinpath('outputTree','src/components', acronnym)
    if not output_to_local.exists():
        output_to_local.mkdir(parents=True)
    file_output = output_to_local.joinpath(PascalCaseFullSvgName+'.jsx')
    with open(file_output, 'w') as thisJSX:
        thisJSX.write(svg_layout.format(PascalNameSVG = PascalCaseFullSvgName, contenidoSVG = tags))
    output_to_portfolio = Path(ruta_portafolio,'src/components',acronnym)
    if not output_to_portfolio.exists():
        output_to_portfolio.mkdir(parents=True)
    output_to_portfolio= output_to_portfolio.joinpath(PascalCaseFullSvgName+'.jsx')
    if not output_to_portfolio.exists():
        print("Este archivo es nuevo {0}. Recuerda todos se estan copiando de nuevo".format(output_to_portfolio))
    copyfile(file_output, output_to_portfolio)
    return PascalCaseFullSvgName


for root, dirs, files in os.walk('./'):
    item = {}         
    if isProject.search(root):
        # print(root, dirs)
        project_Acronym = ''    
        projectName = root.split('/')[1].split('-') 
        capitalizedProjectName = ' '.join(map(lambda x: x.capitalize(), projectName ))
        # print(capitalizedProjectName)
        component_name = capitalizedProjectName.replace(' ', '')
        for word in projectName:
            project_Acronym += word[0].upper()
        for indexFile in files:
            if 'html' in indexFile:
                mainFile = Path(root, indexFile)
                mainText = mainFile.read_text()
                # print(mainFile)
                mainContent = re.search(r'<body>\s*(?P<content>[\w\s\-\.\'!,+?“”’"@:\/]+)',mainText)
                if mainContent:
                    print(root, indexFile)
                mainText = mainText[mainContent.span('content')[0]: mainContent.span('content')[1]]
                print(mainText)
        # print(project_Acronym)
        
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
        dinamic_page_imports=''
        for image in files:
            if 'favicon' not in image:
                # print( image)
                if image[-3:] == 'svg' and 'bg' not in image:
                    imageNameInit, *rest = image[:-4].split('-') 
                    camelCaseName = ''.join([imageNameInit, *map(lambda x: x.capitalize(), rest )])
                    # page_name = createSVGJSX(image, root, project_Acronym)
                    dinamic_page_imports += 'import {name} from "../../../public/frontendmentor/{acronnym}/{original}";\n'.format(name=camelCaseName, acronnym = project_Acronym, original = image)
                    src = Path.joinpath(actual, root, image)
                    output_to_local = Path(actual, 'outputTree/public/frontendmentor', project_Acronym)
                    if not output_to_local.exists():
                        output_to_local.mkdir(parents=True)
                    output_to_local = output_to_local.joinpath(image)
                    copyfile(src, output_to_local)
                    output_to_portfolio = Path(ruta_portafolio, 'public/frontendmentor', project_Acronym)
                    if not output_to_portfolio.exists():
                        output_to_portfolio.mkdir(parents=True)
                    output_to_portfolio = output_to_portfolio.joinpath(image)
                    copyfile(src, output_to_portfolio)
                else:
                    src = Path.joinpath(actual, root, image)
                    output_to_local = Path(actual, 'outputTree/public/frontendmentor', project_Acronym)
                    if not output_to_local.exists():
                        output_to_local.mkdir(parents=True)
                    output_to_local = output_to_local.joinpath(image)
                    copyfile(src, output_to_local)
                    output_to_portfolio = Path(ruta_portafolio, 'public/frontendmentor', project_Acronym)
                    if not output_to_portfolio.exists():
                        output_to_portfolio.mkdir(parents=True)
                    output_to_portfolio = output_to_portfolio.joinpath(image)
                    copyfile(src, output_to_portfolio)
        #aqui funciona la variable component_name
        # print(component_name)
        createPageComponent(component_name, dinamic_page_imports, project_Acronym, mainText)

        








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