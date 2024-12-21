import React from "react";
import { Route } from "react-router-dom";
import Contact from "./Contact";

const ContactRoutes: React.FC = () => {
  return (
    <>
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/details" element={<h1>Contact Details</h1>} />
      <Route path="/contact/details" element={<h1>Contact Support</h1>} />
    </>
  );
};

export default ContactRoutes;
/*
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeRoutes from './routes/HomeRoutes';
import AboutRoutes from './routes/AboutRoutes';
import ContactRoutes from './routes/ContactRoutes';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <HomeRoutes />
                <AboutRoutes />
                <ContactRoutes />
            </Routes>
        </Router>
    );
};

export default App;
*/
