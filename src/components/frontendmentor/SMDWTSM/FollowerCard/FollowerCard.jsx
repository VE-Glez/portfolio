import React from 'react';
import iconDown from '@frontendmentorAssets/SMDWTSM/icon-down.svg';
import iconUp from '@frontendmentorAssets/SMDWTSM/icon-up.svg';
import { Card, Header, Amount, Footer } from './styles';
import { useTheme } from '../theme/themeContext';

function FollowerCard({
  socialIcon,
  socialName,
  socialUser,
  ammount,
  todayAmmount,
  border,
}) {
  const upOrDown = todayAmmount > 0;
  const [actualTheme] = useTheme();

  return (
    <Card borderColor={border} theme={actualTheme}>
      <Header>
        <img src={socialIcon} alt={socialName} />
        <span>{socialUser}</span>
      </Header>
      <Amount theme={actualTheme}>
        <p>{ammount}</p>
        <p>
          {socialName.toUpperCase() === 'YOUTUBE' ? 'SUBSCRIBERS' : 'FOLLOWERS'}
        </p>
      </Amount>
      <Footer isUp={upOrDown} theme={actualTheme}>
        <img
          src={upOrDown ? iconUp : iconDown}
          alt={upOrDown ? 'increase' : 'decrease'}
        />
        <span className='number'>{Math.abs(todayAmmount)}</span>
        <span>Today</span>
      </Footer>
    </Card>
  );
}

export default FollowerCard;
