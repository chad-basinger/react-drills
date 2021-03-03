import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);

    }
    handleUsernameInput(val){
        this.setState({username: val.target.value})
    }

    handlePasswordInput(val){
        this.setState({password: val.target.value})
    }

    handleLogin(){
        return (
            alert(`Username: ${this.state.username} Password: ${this.state.password}`)
        )
        
    }


    render(){
        return (
            <div>
                <input value={this.state.username} onChange={val => this.handleUsernameInput(val)}></input>
                <input value={this.state.password} onChange={val => this.handlePasswordInput(val)}></input>
                <button onClick={() => this.handleLogin()}>Login</button>
            </div>
            
        )
    }
}

export default Login;