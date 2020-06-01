import React, { Component } from "react";
import axios from "axios";

class Add extends Component {
  state = {
    title: "",
  };

  handleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  // POST Requests

  handleSubmit = (e) => {
    e.preventDefault();

    

    axios
      .post(`http://localhost:3000/posts`, this.state )
      .then((res) => {
        console.log(res);
        console.log(res.title);
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="Get">
        <form onSubmit={this.handleSubmit}>
          <label>
            User Name:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Add;
