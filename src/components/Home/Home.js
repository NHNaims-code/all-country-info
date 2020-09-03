import React, { useContext } from 'react';
import Country from '../Country/Country';
import { allCountries } from '../../App';

const Home = () => {
    const countries = useContext(allCountries);
    return (
        <div>
            Total Countries : {countries.length}
            {
            countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
            }
        </div>
    );
};

export default Home;