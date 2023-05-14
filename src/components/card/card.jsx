import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {TextField}  from '@mui/material';
import Typography from '@mui/material/Typography';
import addIco from '../../assets/botoes/add.svg'
import removeIco from '../../assets/botoes/remove.svg'
import './card.css'
import data from '../../data/data';



function Cartao() {

  const [dados, setDados] = useState(data);
  const [ativar, setAtivar] = useState(null)
  const [incremento,setIncremento] = useState(1)
  

  //Função de ativar o modal por o id 
  function modalAdicionar(id) {
    setAtivar(id)
    console.log(id)
  }


  //Funções de incremento e decremento dos produtos
  function decremento(){
    setIncremento(incremento-1)
    if (incremento == 0 ){
       return setIncremento(0)
    }
  }

  function addIncremento(){
    setIncremento(incremento+1)
  }

  //Função para fazer o dispatch para o redux
  function adicionarProduto(){
    alert(incremento)
  }



  return (
    <main>
      <ul className='lista__itens'>

        {dados.map((item) => {
          const isActive = item.id === ativar

          return (
            <li onClick={() => { modalAdicionar(item.id) }} className='itens' key={item.id}>
              <Card sx={{ maxWidth: 240, height: '96%'}}>
                <CardMedia
                  sx={{ height: 230, }}
                  image={item.imgProduto}
                  title="green iguana"
                />
                

                  {isActive ? (
                  <div className='active'>

                  <CardContent id="conteiner-card" >
                  <Typography id="titulo" gutterBottom variant="h5" component="div">
                    {item.nome}
                  </Typography>
                  <Typography id="preco" variant="body2" color="text.secondary">
                   R$ {item.preco}

                  </Typography>
                  <Typography id="descricao" variant="body2" color="text.secondary">
                    {item.descricao}

                  </Typography>
                  <Typography id="desconto" variant="body2" color="text.secondary">
                    {item.desconto}

                  </Typography> 
                  
                  </CardContent>

                    <div className='decremento__incremento'>
                      <button onClick={()=>{decremento()}}><img src={removeIco} alt="icone de sinal de menos" /></button>
                      <TextField sx={{height:50}} type="Number" id='inputAdicionar' value={incremento} onChangeText={(text)=>{setIncremento(text)}}/>
                      <button onClick={()=>{addIncremento()}}> <img src={addIco} alt="icone de sinal de mais" /></button>
                    </div>

                    <div className='container__adicionar'>
                      <Button id='button-adicionar' onClick={()=>{adicionarProduto()}} variant="contained" >
                        Adicionar
                      </Button>
                    </div>
                  </div>):(
                  <CardContent id="conteiner-card" >
                  <Typography sx={{ fontSize: ".8em", height: 28 }} gutterBottom variant="h5" component="div">
                    {item.nome}
                  </Typography>
                  <Typography id="preco" variant="body2" color="text.secondary">
                   R$ {item.preco}

                  </Typography>
                  <Typography sx={{ fontSize: ".7em" }} variant="body2" color="text.secondary">
                    {item.descricao}

                  </Typography>
                  <Typography sx={{ fontSize: ".7em" }} variant="body2" color="text.secondary">
                    {item.desconto}

                  </Typography> 
                  
                  </CardContent>
                  )} 

                

              </Card>
            </li>
          )

        })}

      </ul>



    </main>
  )
}

export default Cartao