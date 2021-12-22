import PREVIOUS from '../Actions/actions'



const initialState={
    id:0
}
export default function QuestionsApiquestionsReducers(state=initialState,action){
    switch(action.type)
    {
        case 'PREVIOUS':
            return [
                state,
                {id:action.payload}
            ]
        case 'NEXT':
            return [
                state,
                {id:action.payload}
            ]    
        default:
            return state    
    }
}