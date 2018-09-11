import React from 'react';
import  firebaseApp  from "./fire";

export default class RegisterBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      error: {
        message: ""
      }
    }
  }
      
    // submitRegister(e) {
    //     e.preventDefault();
    //     const userVal = this.refs.text.value
    //     console.log(userVal)

    //     if(!userVal){
    //         alert("Make it Valid");
    //         return;
    //     }
        
    //     this.props.onUserAdd(userVal)
    //     this.refs.text.value = ""
    // }
    
    register(){ //helper method
      console.log("this.state", this.state)
      const { email, password } = this.state
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => {
          console.log("error", error)
          this.setState({error})
        })
    }
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Register
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="login-input"
                placeholder="Email"
                onChange={event => this.setState({email: event.target.value})}
                />
            </div>
  
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                onChange={event => this.setState({password: event.target.value})}
                />
            </div>
            <button
              type="button"
              className="login-btn"
              onClick={() => this.register()}>Register</button>
          </div>
          <div>{this.state.error.message}</div>
        </div>
      );
    }
  }