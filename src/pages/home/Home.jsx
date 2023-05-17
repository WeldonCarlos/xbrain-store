import React from 'react'
import './style.css'


import Cartao from '../../components/card/card';
import Formulario from '../../components/formulario/Formulario';
import Header from '../../components/header/Header';




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