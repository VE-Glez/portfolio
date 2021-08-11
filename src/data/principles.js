import { FaRecycle } from 'react-icons/fa';
import { MdDeveloperMode } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';
import { IoReloadCircleOutline } from 'react-icons/io5';

const principles = [
  {
    title: 'Reutilizar',
    icon: FaRecycle,
    description:
      'Como programador le doy suma importancia a la filosofía "No te repitas a ti mismo" por lo que al trabajar busco que mi código pueda ser reutilizado a futuro. Extraer funcionalidades y parametrizarlas son mi preocupacion principal.',
  },
  {
    title: 'Diseño Responsivo',
    icon: MdDeveloperMode,
    description:
      'Construyo páginas que pueden verse bien en cualquier dispositivo optimizando especialmente para dispositivos móviles.',
  },
  {
    title: 'Retroalimentación',
    icon: VscFeedback,
    description:
      'Presto atención a los comentarios y sugerencias para iterar sobre un producto y mejorarlo con el tiempo.',
  },
  {
    title: 'Mejora continua',
    icon: IoReloadCircleOutline,
    description:
      'Todos los productos siempre van evolucionando y por ello es importante tener un primer producto sobre el cual iterar. Me enfoco en lanzar de forma rápida una primera versión útil.',
  },
];

export default principles;
