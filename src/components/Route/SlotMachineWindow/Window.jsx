import React, { Component } from 'react';
import './Window.scss'

class Window extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className={this.props.windowStatus}>
                <img src={this.props.val} alt="slotItem" />
            </div>
        );
    }
}

export default Window;
