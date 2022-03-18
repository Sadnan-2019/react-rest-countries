import React from 'react';
import './Country.css'

const Country = (props) => {

          const {name,population,area,flags} = props.country;
          console.log(props.country);
          return (
                    <div className='country'>
                            <h2>Country-Name: {name.common}</h2>  
                            <h5>Country-Population: {population}</h5>
                            <img src={flags.png} alt=""/>  
                            <p>Country-Area: {area}</p>
                            
                    </div>
          );
};

export default Country;