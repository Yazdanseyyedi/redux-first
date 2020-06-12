import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux'
import * as Actions from '../../store/action'

class Counter extends Component {
    
    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResults(this.props.ctr)}>store result</button>
                <ui>
                    {this.props.storedResults.map((strResults)=>
                        <li onClick={()=>this.props.onDeleteResults(strResults.id)}>{strResults.value}</li>)}
                    
                </ui>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        ctr:state.ctr.counter,
        storedResults:state.res.results
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onIncrementCounter:()=>dispatch({type:Actions.INCREMENT}),
        onDecrementCounter:()=>dispatch({type:Actions.DECREMENT}),
        onAddCounter:()=>dispatch({type:Actions.ADD,value:10}),
        onSubtractCounter:()=>dispatch({type:Actions.SUBTRACT,value:15}),
        onStoreResults:(result)=>dispatch({type:Actions.STORE,result:result}),
        onDeleteResults:(id)=>dispatch({type:Actions.DELETE,resultElId:id})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);