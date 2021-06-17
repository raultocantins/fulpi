import {createStore } from 'redux'
import { Reducers } from './reducers/reducers';


  const store = createStore(Reducers)
  export default store;