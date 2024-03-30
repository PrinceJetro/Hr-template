import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import JobList from './components/JobListingsPage';
import Application_Form from './components/application';
import Contact from './components/contact';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/application" element={<Application_Form />} />
        <Route path="/contact" element={<Contact />} />
       {/*  <Route path="/movie/:src" element={<MovieDetails />} />
        <Route path="/watchnow/:title" element={<Movie />} /> */}

      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
