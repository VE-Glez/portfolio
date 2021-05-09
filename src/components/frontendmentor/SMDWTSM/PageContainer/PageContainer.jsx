import React from 'react';

import { useTheme } from '@frontendmentorComponents/SMDWTSM/theme/themeContext';
import ListOfFollowerCards from '@frontendmentorComponents/SMDWTSM/ListOfFollowerCards/ListOfFollowerCards';
import ListOfOverviewCards from '@frontendmentorComponents/SMDWTSM/ListOfOverviewCards/ListOfOverviewCards';
import { Interruptor, Body, Supercontainer, Header } from './styles';
import { types } from '@frontendmentorComponents/SMDWTSM/theme/themeReducer';

const PageContainer = ({ className, totalFollowers = 23004 }) => {
  const [actualTheme, dispatcher] = useTheme();

  const handleChange = (e) => {
    e.target.checked
      ? dispatcher({ type: types.dark })
      : dispatcher({ type: types.light });
  };
  return (
    <Supercontainer theme={actualTheme}>
      <div className={className.container}>
        <Header theme={actualTheme}>
          <div>
            <h1>Social Media Dashboard</h1>
            <p>Total Follower: {totalFollowers} </p>
          </div>
          <Body>
            <span>{actualTheme.name === 'Dark' ? 'Light' : 'Dark'} Mode</span>
            <Interruptor htmlFor='SMDWTSMswitch' theme={actualTheme}>
              <input
                type='checkbox'
                id='SMDWTSMswitch'
                onChange={handleChange}
              />
              <span></span>
            </Interruptor>
          </Body>
        </Header>
        <ListOfFollowerCards />
        <ListOfOverviewCards className={className.overviewCards} />
      </div>
    </Supercontainer>
  );
};

export default PageContainer;
