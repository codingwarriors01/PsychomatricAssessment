// import { createStore, applyMiddleware } from "redux";
// // import thunk from "redux-thunk";
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer  from "../Service/Reducers/rootReducer";
import reducer from '../Service/Reducers/rootReducer';
import { createStore } from "redux";
// import SignInReducer from "../Service/Reducers/signinReducer";

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
// const store = createStore(
//   rootReducer,
//   composedEnhancer
// );
// export default store
const store = createStore(reducer,)

export default store;