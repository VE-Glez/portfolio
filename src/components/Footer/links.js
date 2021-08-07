import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {
  GitHub,
  LinkedIn,
  PhoneAndroidOutlined,
} from '@material-ui/icons';
import { FaDev, FaTwitter } from 'react-icons/fa';

const socialNetworks = [
  {
    styles: { '--color': '#141314', fill: '#141314' },
    href: 'tel:+522293390918',
    icon: PhoneAndroidOutlined,
  },
  {
    styles: { '--color': 'rgb(193,20,9)', fill: 'rgb(193,20,9)' },
    href: 'mailto:valentin.eduardo.g94@gmail.com',
    icon: MailOutlineIcon,
  },
  {
    styles: { '--color': '#4ba8de', fill: '#4ba8de' },
    href: 'https://twitter.com/ve_glez',
    icon: FaTwitter,
  },
  {
    styles: { '--color': 'black', fill: 'black' },
    href: 'https://github.com/veglez',
    icon: GitHub,
  },
  {
    styles: { '--color': '#3563bc', fill: '#3563bc' },
    href: 'https://www.linkedin.com/in/valent%C3%ADn-eduardo-gonz%C3%A1lez-morales-5388a2142/',
    icon: LinkedIn,
  },
];

export default socialNetworks;
