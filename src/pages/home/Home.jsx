import React from 'react'
import Button from '@mui/material/Button';
import style from './style.css'
import Header from '../../components/header/Header';
import Cartao from '../../components/card/card';

function Home() {
  return (
    <div className='container__master'>
      <Header/>
      <Cartao/>
    </div>
    
  )
}

export default Home