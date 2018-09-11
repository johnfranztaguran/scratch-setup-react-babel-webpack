import React, { Component } from "react";
import LoginBox from "./log/loginBox";
//import RegisterBox from "./log/regBox";
import firebaseApp from "./log/fire";
import Blank from "./blank";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          user:{},
        // isLoginOpen: true,
        // isRegisterOpen: false,
      };
    }

//   showLoginBox() {
//     this.setState({ isLoginOpen: true, isRegisterOpen: false });
//   }

//   showRegisterBox() {
//     this.setState({ isRegisterOpen: true, isLoginOpen: false });
//   }

  componentDidMount(){
      this.authListener();
  }

  authListener(){
      firebaseApp.auth().onAuthStateChanged((user) => {
        console.log(user);
        if(user){
            this.setState({ user })
            //localStorage.setItem("user", user.uid)
        }else{
            this.setState({user: null});
            //localStorage.removeItem("user")
        }
      })
  }

  render() {
    return (
      <div className="root-container">
        <div className="box-controller">
          {this.state.user ? (<Blank />) :(<LoginBox />)}
        </div>

        
      </div>
    );
  }
}

export default App;

{/* <div className="root-container">
        <div className="box-controller">
          <div
            className={
              "controller " +
              (this.state.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showLoginBox.bind(this)}
          >
            Login
          </div>
          <div
            className={
              "controller " +
              (this.state.isRegisterOpen ? "selected-controller" : "")
            }
            onClick={this.showRegisterBox.bind(this)}
          >
            Register
          </div>
        </div>

        <div className="box-container">
          {this.state.isLoginOpen && <LoginBox  /> || this.state.user ? (<Blank />) :(<LoginBox />)}
          {this.state.isRegisterOpen && <RegisterBox />}
        </div>
      </div> */}