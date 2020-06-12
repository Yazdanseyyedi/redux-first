import * as Actions from '../store/action'


const inintialState={
    
    results:[]
}

const reducer=(state=inintialState,action)=>{
    switch(action.type){
        
        case(Actions.STORE):
            return{
                ...state,
                results:state.results.concat({id: new Date,value:action.result})
                
            }
        case(Actions.DELETE):
            const newresults=state.results.filter(result=>result.id!==action.resultElId)
            return{
                ...state,
                results:newresults                
            }
            
        default:
            return state

    }



    
}

export default reducer
