import * as Actions from '../store/action'


const inintialState={
    counter:5,
}

const reducer=(state=inintialState,action)=>{
    switch(action.type){
        case(Actions.INCREMENT):
            return{
                ...state,
                counter:state.counter+1
            }   
        case(Actions.DECREMENT):
            return{
                ...state,
                counter:state.counter-1
            }
        case(Actions.ADD):
            return{
                ...state,
                counter:state.counter+action.value
            }
        case(Actions.SUBTRACT):
            return{
                ...state,
                counter:state.counter-action.value
            }
        
        default:
            return state

    }



    
}

export default reducer
