import React, { Component } from 'react';
import  firebaseApp  from "./log/fire";

const Blank = (props) => {
    const { logout, deleteUser } = props
    return ( 
        <div>
            <div>
                <button type="button" className="login-btn" onClick={logout}>Logout</button>
                <button type="button" className="login-btn" onClick={deleteUser}>Delete Account</button>
            </div>
            <h1>Hello This is your Home</h1>
            
            <div>
                {props.error.message}
            </div>

        </div>
         );
    }

 
export default Blank;
