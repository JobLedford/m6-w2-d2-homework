import React from 'react';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends React.Component {
    state = { count: 0 }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    reset = () => {
        this.props.dispatch({ type: 'RESET' })
    }

    render() {
        return(
            <div>
                <h2>Counter</h2>
                <div className="bg-info p-4">
                    <span className="border text-white p-2 m-3">{this.props.count}</span>
                    <button className="m-2" onClick={this.decrement}>-</button>
                    <button className="m-2" onClick={this.increment}>+</button>
                    <button className="m-2" onClick={this.reset}>reset</button>
                </div>
            </div>
        )
    }
}

//Add the mapStateToProps function:
function mapStateToProps(state) {
    return{
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);