import React from 'react';
import Contacts from './Contacts';
import { Search } from './Search';
import './Header.css'
import {useState} from 'react';



function Header(props){

const [color, setColor]= useState('MediumSeaGreen')
const [secColor, setSecColor]= useState('LightPink')

function changeColor(){
    if(color==='MediumSeaGreen'){
        setColor('LightPink');
        setSecColor('MediumSeaGreen')

    }else{

        setColor('MediumSeaGreen');
        setSecColor('LightPink')
        
    }

   }
    
  
    return (
<div style={{backgroundColor:color}}>
       <div className='buttonCss'><Search /></div> 
      <div className='buttonCss'><Contacts /></div>   
       <h1 className='buttonCss'>My name is {props.name}</h1>

       <button className='header' onClick={changeColor}> {secColor} </button>
     
   
  
</div>
    )
}

export default Header;