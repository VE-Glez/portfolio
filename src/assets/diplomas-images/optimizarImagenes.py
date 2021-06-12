import cv2 as cv
from pathlib import Path
import re

current = Path(__file__).parent
print("El archivo a analizar es donde esta el script\n {}".format(current))
#Path.cwd() para utilizar el path de la terminal que llama al script
#si queremos el lugar donde se está el script seria Path.resolve(__file__) 



def reduceImage(i):
    actual_photo = cv.imread(str(i))
    # rows, cols, _channels = map(int, actual_photo.shape)
    #lower = cv.resize(actual_photo, None, 0.35, 0.35, cv.INTER_AREA)
    lower = cv.pyrDown(actual_photo) #, dstsize=(int(cols // 3), int(rows // 3)))
    name = i.stem +'.webp'
    # print("the file is: ", str(current) + '/'+ name)
    print('the new img is: ', name)
    i.unlink()
    cv.imwrite(str(current) + '/'+ name,lower)
    return name


def createFile(allData):
    #allData is an array of dictionaries { diploma: x, title: y, imgName: z}
    templateImport = "import {0} from '@diplomas/{1}';\n"
    templateItem = "{{diploma: {0}, title: '{1}',}},\n"
    dinamicImports = ''
    allItems = ''
    for course in allData:
        dinamicImports += templateImport.format(course['diploma'], course['imgName']) 
        allItems += templateItem.format(course['diploma'], course['title'])
    finalText = "{imports}\nconst data = [{items}];\n\nexport default data;".format(imports=dinamicImports, items=allItems)
    with open(Path(current, 'diplomas.js'), 'w') as diplomasData:
        diplomasData.seek(0)
        diplomasData.truncate(0)
        diplomasData.write(finalText)


allImports=[]
regex = re.compile(r'diploma-(.*)_convert')
if current.is_dir:
    for i in current.iterdir():
        item={}
        file_ext = i.suffix.strip('.')
        #print(file_ext)
        match_type= file_ext in ['png', 'jpg', 'jpeg', 'webp']
        #print(match_type)
        if match_type:
            findName = regex.search(i.stem).group(1).split('-')
            item['imgName'] = reduceImage(i)
            item['diploma'] = '_'.join(findName)
            item['title'] = ' '.join(findName)
            allImports.append(item)
    createFile(allImports)


# if current.is_file:
#     reduceImage(current)
