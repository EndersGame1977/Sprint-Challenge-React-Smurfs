import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post("http://localhost:3333/smurfs", this.state)
      .then(res => console.log(res))
      .catch(error => console.log(error));

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <div class="form-group">
            <label for="name">name</label>
            <input 
              type="text" 
              class="form-control" 
              id="name" 
              placeholder="Name"
              onChange={this.handleInputChange}
              value={this.state.name}
              name="name"
            ></input>
          </div>
          <div class="form-group">
            <label for="height">tall</label>
            <input 
              type="text" 
              class="form-control" 
              id="height" 
              placeholder="Height (cm)"
              onChange={this.handleInputChange}
              value={this.state.height}
              name="height"
            ></input>
          </div>
          <div class="form-group">
            <label for="smurfyears">age</label>
            <input 
              type="text" 
              class="form-control" 
              id="smurfyears" 
              placeholder="Age (smurf years)"
              onChange={this.handleInputChange}
              value={this.state.age}  
              name="age"
            ></input>
          </div>
          <button type="submit" class="btn btn-primary mt-4">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;