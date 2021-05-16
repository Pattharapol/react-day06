import React, { Component } from "react";
import Student from "./Student";
import data from "../data/students";

class Section extends Component {
  render() {
    // const students = [
    //   { id: "61322420115", name: "Pattharapol Lakboon" },
    //   { id: "61322420125", name: "Michael Jordan" },
    // ];
    return <div>
        {
            data.map((std) => {
                return <Student id={std.id} name={std.name}/>
            })
        }
    </div>;
  }
}

export default Section;
