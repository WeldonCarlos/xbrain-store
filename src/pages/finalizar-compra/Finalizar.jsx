import React, { useState } from "react";
import "./style.css";

import BtnLaranja from "../../components/botao-laranja/Btnlaranja";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import likebuy from "../../assets/finalizar/like.png";
import Typography from "@mui/material/Typography";


import { useSelector } from "react-redux";
import numeral from 'numeral'


function Finalizar() {

  const nomeCliente = useSelector((state) => state.nomeCliente);
  const preco = useSelector((state) => state.adicionar)



  return (
    <section className="conteiner-geral">
      <Card id="container-card-finalizar">
        <CardContent>
          <Typography
            id="nome-card-finalizar"
            gutterBottom
            variant="h5"
            component="div"
          >
            {nomeCliente}
          </Typography>
          <Typography
            id="descricao-card-finalizar"
            variant="body2"
            color="text.secondary"
          >
            Sua compra no valor{" "}
            <span className="valor__finalizar">R$ {preco.toLocaleString({ style: 'currency', currency: 'BRL' })}</span> foi finalizada
            com sucesso
          </Typography>
          <div className="container-img-like">
            <img
              className="like"
              src={likebuy}
              alt="imagem de uma mãozinho fazendo sinal de like"
            />
          </div>
        </CardContent>
        <BtnLaranja fonte={12} titulo="INICIAR NOVA COMPRA" rota="/" />
      </Card>
    </section>
  );
}


export default Finalizar;
