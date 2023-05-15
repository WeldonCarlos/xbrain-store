import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './style.css'

function BtnLaranja(props) {
  return (
    <div>

      <Button type='submit' id='button-finalizar' variant="contained" >
        <Link to={props.rota}>{props.titulo}</Link>
      </Button>
    </div>
  )
}

export default BtnLaranja