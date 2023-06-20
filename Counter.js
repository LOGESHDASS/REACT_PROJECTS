import React,{ Component } from 'react'
class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:10
        }
    }


incr(){
    this.setState({
        count:this.state.count-1
    })
}
render(){
          return(<div>
            <h1>COUNT=={this.state.count}</h1>
            <button onClick={()=>this.incr()}>CLICK</button>
            </div>)
         }
}
export default Counter