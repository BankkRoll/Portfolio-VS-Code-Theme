import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Recommendation = lazy(() => import('./pages/Recommendation'));

const renderLoader = () => <p>Loading</p>;

import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Suspense fallback={renderLoader()}>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/recommendation" element={ <Recommendation /> } />
      </Routes>
      </Suspense>
    </AppProvider>
  );
}

export default App;
