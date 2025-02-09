import React from 'react';
import './Layout.styles.css';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <footer className="page-footer">
        <div className="container">
          <div className="row center">
            <h5 className="white-text">Thanks for the visit! ☺</h5>
            <p className="grey-text text-lighten-4">
              Feel free to send me an e-mail or connect with me in any social media on top.
            </p>
            <p className="grey-text text-lighten-4">Marcelo Costa</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
