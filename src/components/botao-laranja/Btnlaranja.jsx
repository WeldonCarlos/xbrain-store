import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.css'

function BtnLaranja(props) {
  
  

  return (
    <div>

      <Button onClick={()=> {props.onClick()}} type='submit' id='button-finalizar' variant="contained" >
        <Link to={props.rota}>{props.titulo}</Link>
      </Button>
    </div>
  )
}

export default BtnLaranja