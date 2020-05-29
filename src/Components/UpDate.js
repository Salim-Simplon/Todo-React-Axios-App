import React, { Component } from "react";
import axios from "axios";


class Put extends Component {
  state = {
    persons: ""
  }

  

  upDate() {
    const data = {
        "id": "1",
        "name": "Amri Salim",
      }
    axios.put(`https://jsonplaceholder.typicode.com/post/1`, data)
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
