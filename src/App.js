import React, { Component } from "react";
import "./App.css";
import Get from "./Components/GetUser";
import Add from "./Components/AddUser";
import Delete from "./Components/DeleteUser";
import Put from "./Components/UpDate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo React-Axios App</h1>
        </header>
        <h2>Add User</h2>
        <Add />
        <h2>Get User</h2>
        <Get />
        <h2>Delete User</h2>
        <Delete />

        <h2> User UpDate</h2>
        <Put />
      </div>
    );
  }
}

export default App;
