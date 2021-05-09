import React from 'react';
import iconDown from '@frontendmentorAssets/SMDWTSM/icon-down.svg';
import iconUp from '@frontendmentorAssets/SMDWTSM/icon-up.svg';
import { useTheme } from '../theme/themeContext';
import { Body, Card, Header, Number, Percentage } from './styles';

const OverviewCard = ({
  title,
  socialIcon,
  socialName,
  number,
  percentage,
}) => {
  const [actualTheme] = useTheme();
  const isUp = percentage > 0;
  return (
    <Card theme={actualTheme}>
      <Header>
        <h3>{title}</h3>
        <img src={socialIcon} alt={socialName} />
      </Header>
      <Body>
        <Number theme={actualTheme}>{number}</Number>
        <Percentage theme={actualTheme} isUp={isUp}>
          <img src={isUp ? iconUp : iconDown} alt='arrow Icon' />
          <span>{Math.abs(percentage)}%</span>
        </Percentage>
      </Body>
    </Card>
  );
};

export default OverviewCard;
