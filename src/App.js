import React, { useEffect, useState } from 'react';
import Weather from './components/Weather.js';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  // State
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('myState');
  const [state, setState] = useState('myState');

  // API KEY AND URL
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}';

  // side effect
  useEffect (async ()=> {
    await fetch(apiUrl)
      .then((res)=> res.json()) 
      .then((data)=> setApiData(data)) 
  }, [apiUrl]);

  // Handling of Inputs
  const inputHandler = (event) => {
    setGetState(event.traget.value);};

  const submitHandler = ()=> {
    setState(getState); };
    
  const kelvinToFenhernhiet = (k) => {
  return  (k - 273.15).toFixed(2)};
  
  return (
      <div>
      <Weather/>
      </div>
   )
  }


export default App