import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';


const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedCountries = (country) => {
        console.log('handle visited country clicked',country);
        const newVisistedCountries=[...visitedCountries, country];
        setVisitedCountries(newVisistedCountries);
    }

    const handleVisitedFlag = (flag) =>{
        // console.log("Flag clicked",flag)
        const newVisitedFlags =[...visitedFlag,flag];
        setVisitedFlag(newVisitedFlags);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    //console.log(countries);
    return (
        <div>
            <h1>In the Countries {countries.length}</h1>
            <h2>Total country visited: {visitedCountries.length}</h2>
            <h2>Total Flags visited: {visitedFlag.length}</h2>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlag.map(flag=><img src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        handleVisitedCountries={handleVisitedCountries} 
                        handleVisitedFlag ={handleVisitedFlag } 
                        country={country}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;