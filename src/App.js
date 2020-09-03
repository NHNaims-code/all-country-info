import React, { useState, createContext } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
import Home from './components/Home/Home';
import CountryDetail from './components/CountryDetail/CountryDetail';
import NotFound from './components/NotFound/NotFound';
import { useEffect } from 'react';
export const allCountries = createContext();

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return (
    <allCountries.Provider value = {countries}>
    <h1 className="alert alert-success text-center">Countries Info</h1>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/country/:countryName">
          <CountryDetail/>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </allCountries.Provider>
  );
}

export default App;
