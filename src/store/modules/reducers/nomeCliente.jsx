export default function nomeCliente(state = [], action) {
    console.log("Redux Ligado Com sucesso");
  
    // variavel calc ta fazendo o calculo do preço que ta vindo de card e a variavel cliente ta recebendo e enviando o nome do cliente para outro componente
  
    const nomeCliente = action.nomeCliente;
  
    switch (action.type) {
      case "ADD_NOMECLIENTE":
        return [nomeCliente];
      default:
        return state;
    }
  }
  