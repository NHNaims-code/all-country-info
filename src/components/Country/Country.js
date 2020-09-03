import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {flag, name, capital, nativeName, region, timezones} = props.country;
    const imgStyle = {height:'80px', padding: '5px 5px', border: '3px solid orange'};
    return (
        <div className='d-flex w-75 mx-auto p-4 border-bottom justify-content-between align-items-center'>
                <Link to = {`/country/${name}`}>
                    <img style={imgStyle} src={flag} alt=""/>
                </Link>
                <div>
                <Link to = {`/country/${name}`}><h4>{name}</h4></Link>
                    <p>Capital: {capital}</p>
                </div>
                <div>
                    <p>Native name: {nativeName}</p>
                    <p>Timezone: {timezones[0]}</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <p><strong>Region: {region}</strong></p>
                    <Link to={`/country/${name}`}><button className="btn btn-warning">all info here</button></Link>
                </div>

        </div>
    );
};

export default Country;