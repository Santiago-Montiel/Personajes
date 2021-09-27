import React from 'react';
import Header from './components/Organisms/Header';
import Footer from './components/Organisms/Footer';
import Layout from './components/Molecules/Layout';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Header nombre="Santiago Montiel" />
      <div className="container d-flex">
        <Layout />
      </div>
      <Footer />
    </>
  )
}

export default App
