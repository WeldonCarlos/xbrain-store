import React from 'react'

import './style.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import BtnLaranja from '../botao-laranja/Btnlaranja';


function Formulario() {
    return (
        <div>

            <section className='cabecalho__dados__cliente'>

                <h2 className='titulo__dados__cliente'>Dados do Cliente</h2>

            </section>

            <form onSubmit={()=>{}}>
                <Box id='form-container'
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        error
                        id="inputs"
                        label="Nome"
                        placeholder='Nome do cliente aqui'
                        required
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                    <TextField
                        error
                        id="inputs"
                        label="Email"
                        required
                        placeholder='Digite seu email aqui'
                        defaultValue="foo"
                    />

                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="input-select"
                            label="Sexo"


                        >
                            <MenuItem value={'Masculino'}>Masculino</MenuItem>
                            <MenuItem value={'Feminino'}>Feminino</MenuItem>
                            <MenuItem value={'LGBTQIAP+'}>LGBTQIAP+</MenuItem>
                        </Select>

                    </FormControl>

                </Box>

                <Box id='container-total'>
                    <Typography id="total" gutterBottom variant="h5" component="div">
                        Total: R$ 299,00
                    </Typography>
                   
                   <BtnLaranja titulo='FINALIZAR COMPRA' rota='/finalizar'/>
                </Box>


            </form>



        </div>
    )
}

export default Formulario