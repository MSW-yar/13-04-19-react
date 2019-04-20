import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  //component ki saari cheezein app mein aayen gi is called inheritence.

  constructor(props) {
    super(props);
    this.state = { name: "khubi", todo: [1, 2, 3, 4] };
    setTimeout(() => {
      this.setState({ name: "SHERRY", todo: [4, 5, 6, 7] });
    }, 3000); //setstate state ko change kr raha hai.
    // this.name = "Usairim";
    // this.last = "hana";
    // this.age = "klALDJ";
  }

  render() {
    return (
      <div className="App">
        <h1>{this.name} Tere Bina AALO Qeema</h1>
        <p>
          lorem ipsium babium haramium. <br /> NA jane tm kab jao ge <br />{" "}
          suhani raat dhaal chuki na jane tm kab jao ge.
        </p>
        <input className="inp" placeholder="Kuch likho is mein." />
        <button> DABA baby DABA baby one pound BABY</button>
        <ul>
          <li>{this.state.name}</li>
          {this.state.todo.map((a, i) => {
            return <li key={i}> {a} bakra </li>;
          })}
        </ul>
        //2 object hote hein prop(parental properties) and state (bachay ka
        //apna jab indono mein change aaye ga to react render method ko chalaye
        ga)
      </div>
    );
  }
}

export default App;
