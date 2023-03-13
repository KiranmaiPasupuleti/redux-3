import React, { Component } from 'react'
import {connect} from 'react-redux'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='app'>
        A : {this.props.a}
        <br/> 
        <button onClick={()=> this.props.incrementA(1+ this.props.b)}>Increment A</button>
        <br/> 
        B : {this.props.b}
        <br/>
        <button onClick={() => this.props.incrementB(1+this.props.a)}>Increment B</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    a: state.rA.a,
    b:state.rB.b
  }
} 

const mapDispatchToProps = (dispatch) => {
  return{
    incrementA :(value) => 
    dispatch({
      type: "INCREMENT_A",
      value
    }),
    incrementB : (value) =>
    dispatch({
      type: "INCREMENT_B",
      value
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)