
import React from 'react';
import  './Search.css';




export class Search extends React.Component{


    render(){
        return(
            <div>
                <h1 className='searchBar'>Bem vindo</h1>
                <input placeholder='o que quer pesquisar?' className='searchBar'></input>  
            </div>
        );}
}

