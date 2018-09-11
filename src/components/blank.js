import React, { Component } from 'react';
import  firebaseApp  from "./log/fire";

class Blank extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            error: {
              message: ""
            }
        }
        this.logout = this.logout.bind(this)
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
            <div>
            <div>
            <button type="button" className="login-btn" onClick={this.logout}>Logout</button>
            <button type="button" className="login-btn" onClick={this.deleteUser}>Delete Account</button>
            </div>
            <h1>Hello This is your Home</h1>
            
            <div>
            {this.state.error.message}
            </div>
            </div>
         );
    }
}
 
export default Blank;