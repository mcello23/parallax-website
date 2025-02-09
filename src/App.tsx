import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Frameworks from './components/pages/Frameworks/Frameworks';
import Home from './components/pages/Home/Home';
import SideProjects from './components/pages/SideProjects/SideProjects';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frameworks" element={<Frameworks />} />
        <Route path="/side-projects" element={<SideProjects />} />
      </Routes>
    </Layout>
  );
};

export default App;
export { };
