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


function Formulario() {
  const [nomeCliente, setNomeCliente] = useState("");
  const [emailCliente, setEmailCliente] = useState("");
  const [sexoCliente, setSexoCliente] = useState("");

  const preco = useSelector((state) => state.adicionar);

  return (
    <div>
      <section className="cabecalho__dados__cliente">
        <h2 className="titulo__dados__cliente">Dados do Cliente</h2>
      </section>

      <Box id="form-container" component="form" noValidate autoComplete="off">
        <TextField
          id="inputs"
          label="Nome"
          placeholder="Nome do cliente aqui"
          required
          type="text"
          value={nomeCliente}
          onChange={(event) => {
            setNomeCliente(event.target.value);
          }}
        />
        <TextField
          id="inputs"
          type="email"
          label="Email"
          required
          value={emailCliente}
          placeholder="Digite seu email aqui"
          onChange={(event) => {
            setEmailCliente(event.target.value);
          }}
        />

        <FormControl>
          <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
          <Select
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
            ? "Total: R$ 0,00"
            : `Total: R$ ${preco}`}
        </Typography>

        <BtnLaranja
          nomeCliente={nomeCliente}
          titulo="FINALIZAR COMPRA"
          rota="/finalizar"
        />
      </Box>
    </div>
  );
}

export default Formulario;


