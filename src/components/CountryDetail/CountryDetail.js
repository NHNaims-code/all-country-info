import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { allCountries } from '../../App';

const CountryDetail = () => {
    const countries = useContext(allCountries);
    const {countryName} = useParams();
    const countryInfo = countries.find(country => country.name === countryName)
    if(countryInfo !== undefined){
        // console.log(countryInfo.name);
        var {name, flag, capital, area, nativeName, population, region, subregion, borders} = countryInfo;
        var NAME = name.toUpperCase();
        var borderCountry = borders.toString();
    }
    
    console.log(countryInfo);
    return (
        <div className="d-flex flex-column text-center bg-danger text-white p-5 w-50 mx-auto rounded-lg shadow">
           <h1>{NAME}</h1>
           <h6>{nativeName}</h6>
           <img className = "w-50 mx-auto mb-5" src={flag} alt=""/>
                <h4>Capital: <strong>{capital}</strong></h4> <br/>
                <div className="d-flex text-center mx-auto justify-content-between w-50">
                <p>Area: <strong>{area}</strong></p>
                <p>Population: <strong>{population}</strong></p>
            </div>
            <div className="d-flex text-center mx-auto justify-content-between w-50">
                <p>Region: <strong>{region}</strong></p>
                <p>Sub-region: <strong>{subregion}</strong></p>
            </div>
            <h5>Border: {borderCountry}</h5>
        </div>
    );
};

export default CountryDetail;