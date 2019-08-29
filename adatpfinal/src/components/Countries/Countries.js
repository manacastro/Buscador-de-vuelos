import React from 'react';
import './Countries.scss';

const Countries = (language) => (   
      <div className='ContentCountries'>
         <img src={language.language.image} alt='' className='FlagImage'/>
         <p className='TitleLanguage'>{language.language.title}</p>
      </div>
)
      
export default Countries