import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./components/App.css"


//import firebaseApp from "./components/log/fire";

import App from "./components/App.js";

// firebaseApp.auth().onAuthStateChanged(user => {
//     if (user) {
//         console.log("user has signed in or up", user)
//     }else {
//         console.log("pls sign in")
//     }
// })

ReactDOM.render(<App />, document.getElementById("root"));
