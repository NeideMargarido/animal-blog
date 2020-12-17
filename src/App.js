import './App.css';
import React from 'react';
import './Header/Header';
import Header from './Header/Header';
import {Card} from './Body/Card';
import Apimaps from './APImaps/Apimaps';


function App() {

  let test='polar';
  return (
    <div className ='App'>
    <Header name='manuel'/>
    
    <Card title= 'Primeiro sapo feio' 
    src='https://greensavers.sapo.pt/wp-content/uploads/2020/06/sapo.jpg'
    text='muito texto sobre o primeiro sapinho'
    link='https://greensavers.sapo.pt/breviceps-fuscus-este-sapo-parece-um-abacate-chateado-com-o-mundo/?photo=1'
    />
    <Card title= 'Segundo sapo super feiozo'
    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Bufotes_balearicus_female.jpg/800px-Bufotes_balearicus_female.jpg'
    text= {test}
    link='https://pt.wikipedia.org/wiki/Sapo'
    />
  
  <Card title= 'Agora é uma cobra' 
    src='https://www.cobras.blog.br/wp-content/uploads/2013/10/1201292-640x480.jpg'
    text='cobra cobrinha cobrona'
    link='https://www.cobras.blog.br/cobra-rateira'
    />

    <Apimaps/>

    
    </div>
  );
}

export default App;
