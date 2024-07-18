import React from 'react';
import Nav from './assets/components/Nav';
// यो nav component import गर्या हो कि Nav.js file import गर्या हो बुजिन
// मलाई चाँहि nav component गर्या जस्तो लागि छ
import Herosection from './assets/components/Herosection';
import './App.css';
import './assets/css/nav.css';
import './assets/css/Herosection.css';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Herosection /> */}
    </div>
  );
}

export default App;
