import {createStore} from 'redux'

import reducers from '../store/rootreducer/index';

const store = createStore(reducers);


export default store