import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {

  const [currentPage, setCurrentPage] = useState('Portfolio');

  const renderPage = () => {
      if (currentPage === 'About') {
          return <About />;
      }
      if (currentPage === 'Contact') {
          return <Contact />
      }
      if (currentPage === 'Resume') {
          return <Resume />
      }
      return <Portfolio />;
  }

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}>
      </Header>
      <section className="project">
        {renderPage()}
      </section>
      <Footer />
    </div>
  );
}

export default App;
