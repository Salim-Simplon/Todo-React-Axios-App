import React, { Component } from "react";
import axios from "axios";


class Get extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <div>{person.name}</div>)}
      </ul>
    )
  }
}

export default Get;
