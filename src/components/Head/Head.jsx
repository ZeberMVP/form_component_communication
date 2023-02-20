import React, { Component } from 'react';
import { userContext } from '../../context/userContext';

class Head extends Component {
    static contextType = userContext;

    render() {
        return (
            <header>
                <h1>{this.context.email}</h1>
            </header>
        )
    }
}

export default Head;