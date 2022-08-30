import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Background } from './Layout';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Background>{children}</Background>
      <Footer />
    </>
  );
};

export default Layout;
