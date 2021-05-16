import React, { Component } from 'react';

class Student extends Component {
    render() {
        return (
            <div>
                <h2>Student Id: {this.props.id}</h2>
                <h2>Student Name: {this.props.name}</h2>
            </div>
        );
    }
}

export default Student;