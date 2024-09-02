import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';

const Layout: React.FC = () => {
  const location = useLocation();

  const isHeroPage = location.pathname === '/';

  return (
    <div>
      <header>
        {isHeroPage ? <Hero /> : <Header />}
      </header>
       <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer> 
    </div>
  );
};

export default Layout;
