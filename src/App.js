import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>Hello World</h1>
       <LoadCountries></LoadCountries>
    </div>
  );
}

const LoadCountries = () => {
  const [countries, setCountries] = useState([]);
  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return (
    <div className="">
      <h1>Visiting Every Country Of the World!!!</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name = {country.name.common} flags = {country.flags.png} capital = {country.capital} population = {country.population}></Country>)
      }
    </div>
  )
}

const Country = (props) => {
  return (
    <div style={{backgroundColor: 'aqua', color: 'black', padding: '20px', margin: '20px', border: '3px solid tomato', borderRadius: '20px'}} className="">
      <h2>Country Name: {props.name}</h2>
      <img src="{props.flags}" alt="" />
      <p>Capital: {props.capital}</p>
      <p>Population: {props.population}</p>
    </div>
  )
}

export default App;
