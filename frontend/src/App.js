import React from 'react';

import Signup from './components/Signup'
import LoginSVG from './components/LoginSVG'
import RegisterSVG from './components/RegisterSVG'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userLogin : {}
    }
  }

  handleLogin = (userinfo) => {
    // code
  }

  render() {
    return (
      <div className="App">
        {/* <Signup/> */}
        <RegisterSVG/>
        {/* <LoginScreen/> */}
      </div>
    );
  }
}

export default App;
