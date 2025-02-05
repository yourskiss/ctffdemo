import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./component/Header"
import Footer from "./component/Footer"
import NotFound from "./pages/NotFound"
const Home = lazy(() => import('./pages/Home'));
const Aboutus = lazy(() => import('./pages/Aboutus'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (<main className='w-full'>
      <Router>
        <Header />
        <Suspense fallback={<div className='w-full text-center text-xl text-black'>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
  </main>)
}
export default App
