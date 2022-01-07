import {combineReducers} from 'redux';
import QuestionsApiquestionsReducers from './questionsApireducer';
import SignInReducer from './signinReducer'

const reducer= combineReducers({
    QuestionsApiquestionsReducers,SignInReducer
});
export default reducer;