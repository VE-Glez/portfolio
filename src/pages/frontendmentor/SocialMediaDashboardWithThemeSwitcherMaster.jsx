import React from 'react';
import Styles from '../../styles/pages/frontendmentor/SMDWTSM.module.scss';

import MyThemeProvider from '@frontendmentorComponents/SMDWTSM/theme/themeContext';
import PageContainer from '../../components/frontendmentor/SMDWTSM/PageContainer/PageContainer';

const SocialMediaDashboardWithThemeSwitcherMaster = () => {
  return (
    <MyThemeProvider>
      <PageContainer
        className={{
          container: Styles.container,
          overviewCards: Styles.overviewCards,
        }}
      />
    </MyThemeProvider>
  );
};

export default SocialMediaDashboardWithThemeSwitcherMaster;
