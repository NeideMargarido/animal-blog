import React from 'react';
import './Card.css';

export class Card extends React.Component{

render(){
return(
<div className='card'>
<div className=".justify-content-center">
   <img className='card-img-top'src={this.props.src} ></img>
 
  <div className="card-body">
      <h5 className="card-title">{this.props.title}</h5>
         <p className="card-text">{this.props.text}</p>
            <a href ={this.props.link} >
              <button className="btn-btn-primary" >Mais informação?</button> 
            </a> 
  </div>
</div>
</div>)

}
}
