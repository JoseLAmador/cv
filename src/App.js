import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{height:'100vh', display:'flex', backgroundColor:'red'}}>
          <div style={{width:'20%', display:'flex', backgroundColor:'green'}}>
              another
          </div>
        <main style={{display:'flex', backgroundColor:'aliceblue', width:'80%', flexDirection:'column', margin:'2%'}}>
           <section style={{display:'flex', height:'33.33%', backgroundColor:'orange'}}>
               some text here
           </section>

           <section style={{display:'flex', height:'33.33%', backgroundColor:'pink'}}>
               card 2
           </section>
        </main>
      </div>
    );
  }
}

export default App;
