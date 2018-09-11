import React, { Component } from 'react';
import  firebaseApp  from "./log/fire";

class Blank extends Component {
    
    constructor(props){
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout(){
        firebaseApp.auth().signOut();
    }

    render() { 
        return ( 
            <div>
            <h1>awtrawtawtaw</h1>
            <button onClick={this.logout}>Logout</button>
            </div>
         );
    }
}
 
export default Blank;