import iconFacebook from '@frontendmentorAssets/SMDWTSM/icon-facebook.svg';
import iconTwitter from '@frontendmentorAssets/SMDWTSM/icon-twitter.svg';
import iconInstagram from '@frontendmentorAssets/SMDWTSM/icon-instagram.svg';
import iconYoutube from '@frontendmentorAssets/SMDWTSM/icon-youtube.svg';

const Facebook = 'hsl(208, 92%, 53%)';
const Twitter = 'hsl(203, 89%, 53%)';
const Instagram =
  'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))';
const YouTube = 'hsl(348, 97%, 39%)';

const followers = [
  {
    socialIcon: iconFacebook,
    socialName: 'facebook',
    socialUser: '@nathanf',
    border: Facebook,
    ammount: 1987,
    todayAmmount: 12, //negativo si ha reducido
  },
  {
    socialIcon: iconTwitter,
    socialName: 'twitter',
    socialUser: '@nathanf',
    border: Twitter,
    ammount: 1044,
    todayAmmount: 99, //negativo si ha reducido
  },
  {
    socialIcon: iconInstagram,
    socialName: 'instagram',
    socialUser: '@realnathanf',
    border: Instagram,
    ammount: '11k',
    todayAmmount: 1099, //negativo si ha reducido
  },
  {
    socialIcon: iconYoutube,
    socialName: 'youtube',
    socialUser: 'Nathan F.',
    border: YouTube,
    ammount: 8239,
    todayAmmount: -144, //negativo si ha reducido
  },
];

export default followers;
