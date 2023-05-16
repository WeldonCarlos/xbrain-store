import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BtnLaranja from '../../components/botao-laranja/Btnlaranja';
import likebuy from '../../assets/finalizar/like.png'
import './style.css'
function Finalizar() {
  return (
    <section className='conteiner-geral'>
      <Card  id='container-card-finalizar'>

        <CardContent>
          <Typography id='nome-card-finalizar' gutterBottom variant="h5" component="div">
            John Doe,
          </Typography>
          <Typography id='descricao-card-finalizar' variant="body2" color="text.secondary">
            Sua compra no valor <span className='valor__finalizar' >R$ 299,00</span> foi finalizada com sucesso
          </Typography>
          <div  className='container-img-like' >
            <img className='like' src={likebuy} alt="imagem de uma mãozinho fazendo sinal de like" />
          </div>
        </CardContent>
        <BtnLaranja fonte={12} titulo='INICIAR NOVA COMPRA' rota='/'  />
      </Card>


    </section>
  )
}

export default Finalizar