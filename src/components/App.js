import React, { Component } from "react";
import LoginBox from "./log/loginBox";
import firebaseApp from "./log/fire";
import Blank from "./blank";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: "",
      user: {},
      error: {
        message: ""
      }
    }
    this.handleChangeEm = this.handleChangeEm.bind(this)
    this.handleChangePass = this.handleChangePass.bind(this)
    this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
    this.logout = this.logout.bind(this)
  }
  componentDidMount(){
      this.authListener();
  }

  authListener(){
      firebaseApp.auth().onAuthStateChanged((user) => {
        console.log(user);
        if(user){
            this.setState({ user })
        }else{
            this.setState({user: null});
        }
      })
  }

  handleChangeEm(emails){
     this.setState({
       email: emails.target.value
     })
   }
   handleChangePass(pass){
     this.setState({
       password: pass.target.value
     })
   }

   login(e){
     console.log("hey", e)
    e.preventDefault();
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch(error => {
      // console.log("error", error)
      this.setState({error})
      this.state.error.message = ""
    })
  
  }
  
  signup(e){
    e.preventDefault();
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch(error => {
      console.log("error", error)
      this.setState({error})
      this.state.error.message = ""
    })
  }

  logout(){
    firebaseApp.auth().signOut();
}

  deleteUser(){
    const user = firebaseApp.auth().currentUser;
    user.delete()
    .then((user) => {
        alert("successfully delete")
        console.log("deleted", user)
    })
    .catch((error) => {
        console.log("error", error)
        this.setState({error})
    })
  }

  render() {
    return (
      <div className="root-container">
        <div>
          {this.state.user ? (<Blank deleteUser={this.deleteUser} logout={this.logout} error={this.state.error} />) :
          (<LoginBox 
          login={this.login} 
          signup={this.signup} 
          handleChangeEm={this.handleChangeEm}
          handleChangePass={this.handleChangePass}
          error={this.state.error}
          />)}
        </div>

        
      </div>
    );
  }
}

export default App;

