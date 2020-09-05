import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Locations from './components/Locations'
import AppWorking from './components/AppWorking';
import DownloadApp from './components/DownloadApp';
import ContactUs from './components/ContactUs';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <div className="gradient-bg">
        <Nav />
        <Jumbotron />
      </div>
      <Locations />
      <AppWorking />
      <DownloadApp />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
