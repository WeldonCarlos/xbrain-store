import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './style.css'

function BtnLaranja(props) {
    const dispatch = useDispatch()
   
   //função para finalizar a compra e disparar uma action para o reducer no redux.
    function finalizarCompra(){
     const nomeCliente = props.nomeCliente;

     
     dispatch({
      type: 'ADD_NOMECLIENTE',
      nomeCliente
      
     })

   }

  return (
    <div>

      <Button onClick={()=> {finalizarCompra()}} type='submit' id='button-finalizar' variant="contained" >
        <Link to={props.rota}>{props.titulo}</Link>
      </Button>
    </div>
  )
}

export default BtnLaranja