import React from 'react';

import { Typography, Button} from '@material-ui/core';
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import './LoginScreen.css'


class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showLogin: true
        }
        this.switchPage = this.switchPage.bind(this)
        this.userLoggedIn = this.userLoggedIn.bind(this)
    }

    switchPage() {
        if(this.state.showLogin)
        {
            this.setState({showLogin: false})
        }
        else{
            this.setState({showLogin: true})
        }
    }

    userLoggedIn() {
        console.log('hello');
    }
    render(){
        return (
            <div className="container">
                <div className="leftcolumn">
                    <Typography className="info">Welcome to Trellis!</Typography>
                </div>
                <div className="rightcolumn">
                    {this.state.showLogin &&
                        <div className="loginbox">
                            <LoginScreen callback={this.userLoggedIn}/>
                            <Typography>Don't have an account? Register here</Typography>
                            <Button onClick={this.switchPage}> Button </Button>
                        </div>
                    }
                    
                    {!this.state.showLogin &&
                        <div className="loginbox">
                            <RegisterScreen callback={this.switchPage}/>
                            <Typography> Already have an account? Login here</Typography>
                            <Button onClick={this.switchPage}> Button </Button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Signup;