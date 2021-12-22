import {SUBMIT }from '../constants'

const initialState = {
      username:''
}
export default function SignInReducer(state=initialState, action) {
    switch(action.type){
        case SUBMIT:
            return {
                username: action.payload,
                state
            }
        default:
            return state;

    }
}