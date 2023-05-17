import React, { useState } from "react";
import "./style.css";
import "./responsive.css"

import Box from "@mui/material/Box";
import BtnLaranja from "../botao-laranja/Btnlaranja";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function Formulario() {
  const [nomeCliente, setNomeCliente] = useState("");
  const [emailCliente, setEmailCliente] = useState("");
  const [sexoCliente, setSexoCliente] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()



  
  //const para resetar o valor do input sempre que finalizar a compra
  
  const preco = useSelector((state) => state.adicionar);
  const limpa = useSelector((state) => state.adicionar);

 //função para finalizar a compra e disparar uma action para o reducer no redux.
 function finalizarCompra(){

  
  
  if(nomeCliente == ""){

   alert("Preencha seu nome corretamente ")
   navigate("/")
   
 }else if(emailCliente == ""){
   alert("Preencha o seu email corretamente")
   navigate("/")
 }

  dispatch({
   type: 'ADD_NOMECLIENTE',
   nomeCliente   
  })

 }



  return (
    <div>
      <section className="cabecalho__dados__cliente">
        <h2 className="titulo__dados__cliente">Dados do Cliente</h2>
      </section>

      <Box  id="form-container" component="form" noValidate autoComplete="off">
        <TextField
          error={!nomeCliente.length}
          id="inputs"
          label="Nome"
          placeholder="Nome do cliente aqui"
          required
          helperText="Campo Obrigatório"
          type="text"
          value={nomeCliente}
          onChange={(event) => {
          setNomeCliente(event.target.value);
          }}
        />
        <TextField
          error={!emailCliente.length}
          id="inputs"
          type="email"
          label="Email"
          required
          helperText="Campo Obrigatório"
          value={emailCliente}
          placeholder="Digite seu email aqui"
          onChange={(event) => {
            setEmailCliente(event.target.value);
          }}
        />

        <FormControl>
          <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
          <Select
            error={!sexoCliente.length}
            value={sexoCliente}
            type="text"
            labelId="demo-simple-select-label"
            id="input-select"
            label="Sexo"
            onChange={(text) => setSexoCliente(text.target.value)}
          >
            <MenuItem value={"Masculino"}>Masculino</MenuItem>
            <MenuItem value={"Feminino"}>Feminino</MenuItem>
            <MenuItem value={"LGBTQIAP+"}>LGBTQIAP+</MenuItem>
          </Select>
        </FormControl>
      </Box>


      <Box id="container-total">
        <Typography id="total" gutterBottom variant="h5" component="div">
          {preco == 0
            ? `Total: R$ ${limpa},00`
            : `Total: R$ ${preco.toLocaleString({ style: 'currency', currency: 'BRL' })}.00`}
        </Typography>

        <BtnLaranja
          tipo="submit"
          nomeCliente={nomeCliente}
          emailCliente={emailCliente}
          titulo="FINALIZAR COMPRA"
          rota="/finalizar"
          onClick={finalizarCompra}
        />
      </Box>
    </div>
  );
}

export default Formulario;


