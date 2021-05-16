import React, { Component } from "react";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "Yellow",
      brand: "TESLA",
      model: "Model 3",
      year: "2020",
    };
  }

  changeCarInfo = () => {
    this.setState({
      color: "Blue",
      brand: "Mitsubushi",
      model: "Skyline",
      year: "2025",
    });
  }

  render() {
    return (
      <div>
        <h2>My Brand {this.state.brand}</h2>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        {/* <button onClick={()=>{this.setState({
            color:"BLUE",brand:"Mitsubishi",model:"Skyline", year:"2025"
        })}}>Change Car Info</button> */}
        <button onClick={this.changeCarInfo}>Change Car Info</button>
      </div>
    );
  }
}

export default Car;
