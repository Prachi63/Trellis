import React from 'react';
import axios from 'axios';

import { TextField, Button } from '@material-ui/core';
import './LoginScreen.css'


class LoginScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this)
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    handleSubmitLogin(e){
        const reqLogin = {
            body: {
                email: this.state.email,
                password: this.state.password
            }
        }
        axios
            .post('http://localhost:3001/login', reqLogin)
            .then(response => {
                this.props.callback(response)
            })
    }
    render(){
        return (
            <div>
                <div>
                        <div>
                        <form onSubmit={this.handleSubmitLogin}>
                            <TextField 
                                id="outlined-basic" 
                                label="Email" 
                                variant="outlined" 
                                value={this.state.email} 
                                onChange={this.handleChange('email')}
                            />
                            <TextField 
                                id="outlined-basic" 
                                label="Password" 
                                variant="outlined" 
                                type={'password'}
                                value={this.state.password} 
                                onChange={this.handleChange('password')}
                            />
                             <Button
                                label="Submit"
                                type="submit"
                                color="#6b94ff"
                                labelColor={'#FFFFFF'}>
                                    Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginScreen;