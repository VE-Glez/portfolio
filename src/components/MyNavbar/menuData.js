import { FaRegFolderOpen, FaToolbox, FaAddressCard } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';

const listofitems = [
  {
    icon: AiFillHome,
    route: '/',
    label: 'Home',
    nested: [
      {
        icon: FaToolbox,
        targetId: 'technologies',
        label: 'Skills',
      },
      {
        icon: FaAddressCard,
        targetId: 'about-me',
        label: 'Contact me',
      },
    ],
  },

  {
    icon: FaRegFolderOpen,
    route: '/projects',
    label: 'Projects',
  },
  {
    icon: GiDiploma,
    route: '/certifications',
    label: 'Certifications',
  },
];

export default listofitems;
