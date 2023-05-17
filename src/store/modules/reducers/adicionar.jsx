export default function adicionar(state = [], action) {
    console.log("Redux Ligado Com sucesso");
  
    // variavel calc ta fazendo o calculo do preço que ta vindo de card e a variavel cliente ta recebendo e enviando o nome do cliente para outro componente
  
    const calc = action.preco * action.incremento;
  
    switch (action.type) {
      case "ADD_CARRINHO":
        return [calc];
       
      case "LIMPAR": 
        return action.preco = 0;
      default:
        return state;
    }
  }
  