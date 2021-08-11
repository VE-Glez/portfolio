import { FaRegFolderOpen, FaToolbox, FaAddressCard } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const listofitems = [
  {
    icon: AiFillHome,
    href: '/',
    label: 'Home',
    nested: [
      {
        icon: GoSettings,
        href: '/#programmingPrinciples',
        label: 'Principios de desarrollo',
      },
      {
        icon: FaToolbox,
        href: '/#technologies',
        label: 'Tecnologías',
      },
      {
        icon: FaRegFolderOpen,
        href: '/#projects',
        label: 'Proyectos',
      },
      {
        icon: FaAddressCard,
        href: '/#contact-me',
        label: 'Contáctame',
      },
    ],
  },
  {
    icon: GiDiploma,
    href: '/certifications',
    label: 'Certificados',
  },
  {
    icon: PermIdentityIcon,
    href: '/about-me',
    label: 'Acerca de mi',
  },
];

export default listofitems;
