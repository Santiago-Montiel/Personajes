import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Header anime="HunterxHunter" />
      <div className="container d-flex">
        <Layout />
      </div>
      <Footer />
    </>
  )
}

export default App
