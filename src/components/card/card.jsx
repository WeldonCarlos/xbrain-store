import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import addIco from '../../assets/botoes/add.svg'
import removeIco from '../../assets/botoes/remove.svg'
import './card.css'
import data from '../../data/data';


function Cartao() {

  const [dados, setDados] = useState(data);
  const [ativar, setAtivar] = useState(false)
  function modalAdicionar(id) {
    setAtivar(true)
    console.log(id)
  }

  return (
    <main>
      <ul className='lista__itens'>

        {dados.map((item) => {
          return (
            <li onClick={() => { modalAdicionar(item.id) }} className='itens' key={item.id}>
              <Card sx={{ maxWidth: 240, height: '100%' }}>
                <CardMedia
                  sx={{ height: 230, }}
                  image={item.imgProduto}
                  title="green iguana"
                />
                <CardContent >
                  <Typography sx={{ fontSize: ".8em", height: 35 }} gutterBottom variant="h5" component="div">
                    {item.nome}
                  </Typography>
                  <Typography sx={{ fontSize: ".7em" }} variant="body2" color="text.secondary">
                   R$ {item.preco}

                  </Typography>
                  <Typography sx={{ fontSize: ".7em" }} variant="body2" color="text.secondary">
                    {item.descricao}

                  </Typography>
                  <Typography sx={{ fontSize: ".7em" }} variant="body2" color="text.secondary">
                    {item.desconto}

                  </Typography>

                  {ativar === true ? (<div className='active'>
                    <div className='decremento__incremento'>
                      <button><img src={removeIco} alt="icone de sinal de menos" /></button>
                      <input type="number" value={1} />
                      <button> <img src={addIco} alt="icone de sinal de mais" /></button>
                    </div>

                    <div className='container__adicionar'>
                      <button className='button__adicionar'>
                        ADICIONAR
                      </button>
                    </div>
                  </div>) : (<div></div>)}

                </CardContent>

              </Card>
            </li>
          )

        })}

      </ul>



    </main>
  )
}

export default Cartao