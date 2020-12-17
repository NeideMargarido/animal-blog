import React from 'react';
import './Contacts.css'
import { useState } from 'react';


function Contacts(){

    const [inside, setInside] = useState('Contacts');

    function Change(){
         setInside('9188***')
    }

    function Change2(){
        setInside('Contacts')
    }

    return(
        <h1 className='contacts' onMouseOver={Change} onMouseOut={Change2}>{inside}</h1>

    )
}
  
  export default Contacts;