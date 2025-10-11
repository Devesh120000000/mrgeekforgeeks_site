import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import CompanyRoles from './pages/CompanyRoles';
import Collaborate from './pages/Collaborate';
import Socials from './pages/Socials';
import Contact from './pages/Contact';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Routes>
        {/* Home page with all main sections */}
        <Route
          path="/"
          element={
            <>
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="services"><Services /></section>
              <section id="team"><Team /></section>
              <section id="company-roles"><CompanyRoles /></section>
              <section id="collaborate"><Collaborate /></section>
              <section id="socials"><Socials /></section>
            </>
          }
        />

        {/* Contact page separate */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <ScrollToTop/>
    </div>
  );
};

export default App;
