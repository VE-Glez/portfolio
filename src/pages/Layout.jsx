import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MyNavbar from '../components/MyNavbar/MyNavbar';

function Layout({ children }) {
  return (
    <>
      <Header>
        <MyNavbar />
      </Header>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
