import React, { Component } from 'react';
import Button from '@mui/material/Button';

import {userContext} from '../../context/userContext';

class Form extends Component {
    static contextType = userContext; 

    constructor(props) {
        super(props)

        this.name = React.createRef();
        this.email = React.createRef();
        this.img = React.createRef();
        this.age = React.createRef();

        this.state = {
            name: "",
            email: "",
            img: "",
            age: ""
        }

    }

    sendData = () => {
        const { login } = this.context; 

        login(this.state.name, this.state.email, this.state.img, this.state.age);
        alert("Data sent: " + this.state.name + " " + this.state.email + " " + this.state.img + " " + this.state.age);

        this.name.current.value = "";
        this.email.current.value = "";
        this.img.current.value = "";
        this.age.current.value = "";
        this.setState({ 
            name: "",
            email: "",
            img: "",
            age: ""
        });
    }

    eraseData = () => {
        const { logout } = this.context;

        logout();
        
        this.name.current.value = "";
        this.email.current.value = "";
        this.img.current.value = "";
        this.age.current.value = "";
        this.setState({ 
            name: "",
            email: "",
            img: "",
            age: ""
        });
    }
    handleChange = () => {
        const name = this.name.current.name;
        const email = this.email.current.value;
        const img = this.img.current.value;
        const age = this.age.current.value;
        this.setState({ name, email, img, age });
    }

    render() {
        return (
            <form>
                <h1>Introduce your name</h1>
                <input type="text" ref={this.name} onChange={this.handleChange} />
                <h1>Introduce your email</h1>
                <input type="email" ref={this.email} onChange={this.handleChange} />
                <h1>Introduce your image</h1>
                <input type="text" ref={this.img} onChange={this.handleChange} />
                <h1>Introduce your age</h1>
                <input type="number" ref={this.age} onChange={this.handleChange} /> <br></br> <br></br>
                <Button variant="contained" onClick={this.sendData}>Login</Button> <br></br> <br></br>
                <Button variant="contained" onClick={this.eraseData}>Logout</Button>
            </form>
        )
    }
}

export default Form;