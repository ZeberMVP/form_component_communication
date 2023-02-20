import React, { Component } from 'react';
import { userContext } from '../../context/userContext';

class Card extends Component {
    static contextType = userContext;

    render() {
        console.log(this.context.name, this.context.email)
        return (
            <section>
                <p>{this.context.name}</p>
                <p>{this.context.email}</p>
                {this.context.img ? <img alt="user" src={this.context.img} /> : null}
                <p>{this.context.age}</p>
            </section>
        )
    }
}

export default Card;