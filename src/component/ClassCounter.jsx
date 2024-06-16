import React from "react";

class ClassCounter  extends React.Component{

    render(){

        constructor(props) {
            super(props);
            this.state = {count: 0}
        }
            
        increment() {
            this.setState({count: this.state.count +1})
        }

        decrement() {
            this.setState({count: this.state.count -1})
        }

        return (
            <div>
                <h1>{this.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default ClassCounter;