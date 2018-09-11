import React from 'react';
import  firebaseApp  from "./fire";

export default class LoginBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      error: {
        message: ""
      }
    }
    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  login(e){
    e.preventDefault();
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch(error => {
      console.log("error", error)
      this.setState({error})
    })
  }
  
  signup(e){
    e.preventDefault();
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch(error => {
      console.log("error", error)
      this.setState({error})
    })
  }

// signup(e){ //helper method
//   e.preventDefault();
//   console.log("this.state", this.state)
//   const { email, password } = this.state
//   firebaseApp.auth().signInWithEmailAndPassword(email, password)
//     .catch(error => {
//       console.log("error", error)
//       this.setState({error})
//     })
// }

handleChange(e) {
  this.setState({[e.target.name]:e.target.value})
}
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                value={this.state.email}
                onChange={this.handleChange}
                type="text"
                name="email"
                className="login-input"
                placeholder="email"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
              value={this.state.password}
              onChange={this.handleChange}
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
  
            <button type="button" className="login-btn" onClick={this.login}>Login</button>
            <button type="button" className="login-btn" onClick={this.signup}>SignUp</button>
          </div>
          <div>{this.state.error.message}</div>
        </div>
      );
    }
  
  }