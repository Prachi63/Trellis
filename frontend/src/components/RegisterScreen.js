import React from 'react';
import axios from 'axios';

import { TextField, Button, Select } from '@material-ui/core';
import './LoginScreen.css'


class RegisterScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            name: "",
            accountType: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmitRegister = this.handleSubmitRegister.bind(this)
    }
    
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    handleSubmitRegister(e){
        const reqRegister = {
            body: {
                accountType: this.state.accountType,
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            }
        }
        axios
            .post('http://localhost:3001/register', reqRegister)
            .then(response => {
                this.props.callback(response)
            })
    }
    render(){
        return (
            <div>
                <div>
                    <div>
                        <form onSubmit={this.handleSubmitRegister}>
                            <Select
                                native
                                value={this.state.accountType}
                                onChange={this.handleChange('accountType')}
                                inputProps={{
                                    'aria-label': 'Type of account' 
                                }}
                            >
                                <option value="mentee">Mentee</option>
                                <option value="mentor">Mentor</option>
                            </Select>
                            <TextField 
                                id="outlined-basic" 
                                label="Full name" 
                                variant="outlined" 
                                value={this.state.name} 
                                onChange={this.handleChange('name')}
                            />
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

export default RegisterScreen;