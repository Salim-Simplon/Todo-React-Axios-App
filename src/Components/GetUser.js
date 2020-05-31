import React, { Component } from "react";
import axios from "axios";


class Get extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/posts`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <div>{person.title}</div>)}
      </ul>
    )
  }
}

export default Get;
