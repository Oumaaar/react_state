import React from "react";

import Person from "./Person";

class App extends React.Component {
  state = {
    isVisible: false,
  };
  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  state = {
    Person: {
      fullNAME: "Boussaffara Omar",
      bio: `freelance and street art phtography.`,
      profession: "photographer ",
    },
    show: false,
  };
  
  render() {
    return (
      <div className="App">
        <h1>React State</h1>
        <button onClick={this.toggleVisibility} className="visibility-btn">
          {this.state.isVisible ? "Hide Person" : "Show Person"}
        </button>
        {this.state.isVisible && (<Person Person={this.state.Person} >
          
          </Person>)}
      </div>
         
      
    );
  }
}

export default App;