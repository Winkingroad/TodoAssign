import { createStore } from 'redux';
import todoReducer from './reducer'; // Importing the reducer

// Creating the Redux store with the todoReducer
const store = createStore(todoReducer);

export default store; // Exporting the Redux store
