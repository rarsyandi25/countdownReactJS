import React from 'react'
import Clock from './Clock'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            deadline : 'August 25, 2020',
            newDeadline : ''
        }
        // console.log(this.state) --> nampilin state yang ada
    }
    
    render() {
        return (
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline}
                </div>
                
                <Clock deadline={this.state.deadline}/>
                <div>
                    <input className="Form-control" type="text" placeholder="new date" onChange={(event)=>{
                        // console.log(event.target.value) --> ngambil yang input 
                        this.setState({
                            newDeadline:event.target.value
                        })
                    }}/>
                    
                    <button className="Btn" onClick={()=>{
                        // console.log(this.state) --> nampilin state
                        this.setState({
                            deadline:this.state.newDeadline
                        })
                    }}>Submit</button>
                    <small className="Format">Format : Month date, Year </small>
                </div>
                
            </div>
        )
    }
}

export default App