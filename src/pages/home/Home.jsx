import React from 'react'
import Header from '../../components/header/Header';
import Cartao from '../../components/card/card';
import './style.css'
import Formulario from '../../components/formulario/Formulario';

function Home() {
  return (
    <div className='container__master'>
      <Header/>
      <Cartao/>
      <Formulario/>
    </div>
    
  )
}

export default Home