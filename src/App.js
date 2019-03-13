import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import List from './components/List';

import axios from 'axios';
import './App.css';


class App extends Component { 
constructor(props){
  super(props);
  this.state={
    people:[],
  }
  this.getPeople=this.getPeople.bind(this);
}

getPeople(){
  return axios.get("https://swapi.co/api/people")
  .then((response)=>{
    console.log(response.data.results);
    this.setState({
      people:response.data.results
    })
  }
 )

  }
 


componentDidMount(){
  this.getPeople();
};
  render() { 
    const {people}=this.state;    
    return (
      <div className="container-fluid">
      <div className="row">
        <Navbar />
        <Container people={people}/>               
      </div>
     
  </div>
  
   
    );
  }
}

export default App;
