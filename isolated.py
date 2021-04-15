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

def createFile (output_file_to_production, output_local_path,whichPaths, overwrite, data=[]):
  exists_parent_file = output_file_to_production.parent.exists()
  if not exists_parent_file:
    exists_parent_file.mkdir(parents=True)
  if overwrite:
    mode = 'w'
    output_file_to_production.write(data)


