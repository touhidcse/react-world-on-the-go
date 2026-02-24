import React, { useState } from 'react';
import './Country.css';


const Country = ({ country,handleVisitedCountries,handleVisitedFlag }) => {
    const [visited, setVisited]=useState(false);
    // console.log(country.flags.flags.png);
    //console.log(country.area.area);
    const handleVisited = () => {
        //console.log('Button Clicked');
        //setVisited(true);
        // zodi vule chap pore jai

        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }
        // Second system
        //setVisited(visited?false:true);
        setVisited(!visited);
        handleVisitedCountries(country);

    }
    return (
        <div className= {`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Populations: {country.population.population}</p>
            <p>Continent: {country.continents.continents}</p>
            <p>Area: {country.area.area} {country.area.area > 400000 ? "Big country" : "Small Country"}</p>
            <button onClick={handleVisited}>
                {visited?'Visited':'Not Visited'}
            </button>
            <button onClick={()=>{handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;