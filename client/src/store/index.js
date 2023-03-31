import { createStore } from 'redux';

const initialState = {};

function rootReducer(state = initialState, action) {
  // add your reducers here
}

const store = createStore(rootReducer);

export default store;
