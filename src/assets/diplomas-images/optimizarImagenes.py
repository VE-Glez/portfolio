
import cv2 as cv
from pathlib import Path

current = Path.cwd()
#si queremos el lugar donde se ejecuta el script seria Path.resolve(__file__) 

for i in current.iterdir():
    file_ext = i.suffix.strip('.')
    #print(file_ext)
    match_type= file_ext in ['png', 'jpg', 'jpeg', 'webp']
    #print(match_type)
    if match_type:
        actual_photo = cv.imread(str(i))
        rows, cols, _channels = map(int, actual_photo.shape)
        print("filas: {}, cols {}".format(rows, cols))
        print(str(i))
        lower = cv.pyrDown(actual_photo) #, dstsize=(int(cols // 3), int(rows // 3)))
        #lower = cv.resize(actual_photo, None, 0.35, 0.35, cv.INTER_AREA)
        name = i.stem +'.webp'
        #name = str(i)
        print('the name is: ', name)
        i.unlink()
        cv.imwrite(name,lower)
