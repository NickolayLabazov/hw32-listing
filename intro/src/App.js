import React from 'react';
import Listing from './components/Listing.jsx';
import './App.css';

import {data} from './etsy.js';

function App() {
  return (
    <Listing items = {data}/>
  );
}

export default App;
