const redux=require('redux')


const initialState={
    counter:0
}

const createStore=redux.createStore

//Reducer 
Reducer=(state=initialState,action)=>{
    if(action.type==='INC_COUNTER'){
        return{
            ...state,
            counter:state.counter+1
        }
    }

    if(action.type==='ADD_COUNTER'){
        return{
            ...state,
            counter:state.counter+action.value
        }
    }
    return state
    
}


//Store
store=createStore(Reducer)
console.log(store.getState())

//subscriptions
store.subscribe(()=>{
    console.log( "[Subscription]" , store.getState())
})


//actions
store.dispatch({type:'INC_COUNTER'})
store.dispatch({type:'ADD_COUNTER', value:10})
console.log(store.getState())


