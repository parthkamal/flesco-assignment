import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container';

const NumbersObject = {
  heading: "numbers",
  items: [{ title: "Deployment", cm: 100, lm: 150 },
  { title: "Contributors", cm: 30, lm: 25 },
  { title: "Live Issues", cm: 140, lm: 141 },
  { title: "PR Opened", cm: 250, lm: 250-42 },
  { title: "PR Merged", cm: 250, lm: 150 }]
}

const CycleTimeObject={
  heading: "Cycle time",
  items: [{ title: "Live Issues", cm: 2, lm: 2 },
  { title: "PR", cm: 1, lm: 1 },
  { title: "Story", cm: 15, lm: 8 },]
}

const MileStoneObject={
  heading: "Milestone",
  items: [{ title: "My orders pages enhancement completed" },]
}

const concernObject={
  heading: "Areas of concern",
  items: [{ title: "Scope for multi-deployment of a microservice scope increased. Forecasted date of completion Oct 2022"},
  { title: "Ratio of PR Merged vs opened has come down" },
  { title: "10% more live issues" },]
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Container obj={NumbersObject} primary={'#1d2f5d'} secondary={'#293a68'}/>
       <Container obj={CycleTimeObject} primary={'#292a5a'} secondary={'#383666'}/>
       <Container obj={MileStoneObject} primary={'#172e36'} secondary={'#213c45'}/>
       <Container obj={concernObject} primary={'#172e36'} secondary={'#213c45'}/>
      </React.Fragment>
     
    );
  }
}

export default App;
