import { combineReducers } from "redux";

import adicionar from '../modules/reducers/adicionar' 
import nomeCliente from "../modules/reducers/nomeCliente";

export default combineReducers({
    adicionar,
    nomeCliente
})