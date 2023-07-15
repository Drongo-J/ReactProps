// import React, { Component } from "react";

import React from "react";


const person = {
    name: "Ayxan",
    age: 24,
    theme: {
        backgroundColor: "deepskyblue",
        color: "white"
    }
}

function getFullInfo(){
    return "NAME : " + person.name + " AGE :" + person.age;
}

export default function Item() {
  return (
    <div>
      <h1 style={person.theme}>My name is {person.name}</h1>
      <h2>I am {person.age} years old</h2>
      <span>{getFullInfo()}</span>
    </div>
  );
}

// export default class Item extends Component {
//   name = "Ayxan";
//   age = 10;
//   style = {
//     color: "deepskyblue",
//   }

//   getFullInfo(){
//     return this.name + " " + this.age;
//   }

//   render() {
//     return (
//       <div>
//         <h1 style={this.style}>My name is {this.name}</h1>
//         <h2>I am {this.age} years old</h2>
//         <span>{this.getFullInfo()}</span>
//       </div>
//     );
//   }
// }
