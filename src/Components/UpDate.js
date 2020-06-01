import React, { Component } from "react";
import axios from "axios";


class Put extends Component {
  state = {
    data: "",
    id: ""

  }

  

  upDate() {
    const data = {
        "id": "1",
        "title": "jsx",
      }
    axios.put(`http://localhost:3000/posts/${this.state.id}`, data)
      .then(data => {
        console.log(data);
      })
      .catch( err => {console.log(err);}

      )
  }

  render() {
    return (
      <button className="up" onClick={this.upDate}>Update</button>
    )
  }
}

export default Put;
