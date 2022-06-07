import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Navigation from './components/Navigation';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

function App() {

  const [currentPage, setCurrentPage] = useState('Contact');

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

  const setPageHandler = (page) => setCurrentPage(page)

  return (
    <div>
      <Header>
        <Navigation currentPage={currentPage} setPageHandler={setPageHandler} />
      </Header>
      <section className="project">
        {renderPage()}
      </section>
      <Footer />
    </div>
  );
}

export default App;
