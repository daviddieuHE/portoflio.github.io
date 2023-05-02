import React from 'react';
import Home from './Container/Home/Home';
import Vision from './Container/Vision/Vision';
import Tableau from './Container/Tableau/Tableau';
import Footer_bottom from './Container/Footer/Footer_bottom';

function App() {
  return (
    <div className="App">
      <Home/>
      <Vision/>
      <Tableau/>
      <Footer_bottom/>
    </div>
  );
}


export default App;
