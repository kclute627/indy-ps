import React from 'react';

import Homepage from './Homepage';
import Services from './Services';
import Contact from './contact';
import Pricing from './Pricing';
import Footer from './footer';



function App() {
  return (
    <div className="App">
      <Homepage/>
      <Services />
      <Contact /> 
      <Pricing />
      <Footer/>
    </div>
  );
}

export default App;
