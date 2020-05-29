import React, { Component } from "react";
import "./App.css";
import Test1 from "./Composant/test1";
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from "./Composant/Contacts";
import ContactInput from "./Composant/ContactInput"

export class App extends Component {
  state = {
    profil: [
      {
        id: 1,
        nom: "Salim",
        age: "33",
      },
      {
        id: 2,
        nom: "Sarah",
        age: "35",
      },
      {
        id: 3,
        nom: "Soumaya",
        age: "41",
      },
    ],
  };

  jeune = () => {
    let newAge = this.state.profil.map((el) => {
      el.age -= 5;
      return el.age;
    });
    this.setState({ newAge });
  };

  render() {
    /*
    setTimeout(() => {
      this.setState({
        profil: [
          {
            id: 1,
            nom: "Sami",
            age: "33",
          },
          {
            id: 2,
            nom: "Sahar",
            age: "35",
          },
          {
            id: 3,
            nom: "Soumaya",
            age: "41",
          },
        ],
      });
    }, 3600);
*/

    return (
      <div className="App">
        <h1>Bienvenue</h1>
        <Test1 profil={this.state.profil} />
        <button onClick={this.jeune}>Rajeunir</button>
       
        <Contacts />
        <ContactInput />
      </div>
    );
  }
}

export default App;
