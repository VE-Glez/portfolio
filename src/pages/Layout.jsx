import React from 'react';
import Footer from '../components/Footer/Footer';
import MyNavbar from '../components/MyNavbar/MyNavbar';

function Layout({ children }) {
  return (
    <>
      <MyNavbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
