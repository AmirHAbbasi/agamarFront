import React, { Component } from 'react';

class Counter extends React.Component {
    state={
        count:0,
    };
    styles={
        fontSize : '10px',

    }
    formatCount(){
        return this.state.count==0 ? 'Zero':'More';
    }
    render() { 
    
        return (
        <div>
            <span style={this.styles} className="badge badge-warning m-2">{this.formatCount()}</span>
            <button onClick={this.state.count+=1} className="btn btn-secondary btn-sm">Increment</button>
            <button className="btn btn-danger btn-sm m-2">Fuck</button>
            <div class="d-inline-flex p-2">I'm an inline flexbox container!</div>
        </div>
        );
    }
}
 
export default Counter;