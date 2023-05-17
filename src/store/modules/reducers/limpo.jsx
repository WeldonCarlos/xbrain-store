export default function limpo(state = [], action) {
    console.log("Redux Ligado Com sucesso");
  
    // variavel calc ta fazendo o calculo do preço que ta vindo de card e a variavel cliente ta recebendo e enviando o nome do cliente para outro componente

    switch (action.type) {
      case "LIMPAR":
        return state = [];
       
        
      default:
        return state;
    }
  }
  