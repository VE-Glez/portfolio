import { FaRegFolderOpen, FaToolbox, FaAddressCard } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const listofitems = [
  {
    icon: AiFillHome,
    route: '/',
    label: 'Home',
    nested: [
      {
        icon: PermIdentityIcon,
        targetId: 'about-me',
        label: 'Acerca de mi',
      },
      {
        icon: FaToolbox,
        targetId: 'technologies',
        label: 'Habilidades',
      },
      {
        icon: FaAddressCard,
        targetId: 'contact-me',
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
