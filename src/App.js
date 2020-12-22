import { Component } from 'react';
import React from 'react';
import './App.css';
//import Demo from './Components/Demo';
//import ResultItem from './Components/ResultItem';
import ResultList from './Components/ResultList';
import SearchMovie from './Components/SearchMovie';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       items:""
    }
  }
  
  search = (datos) => {
    const DATO = datos;
    console.log(DATO);

    fetch('http://localhost:4200/search/movies/'+ DATO)
    .then(res => { return res.json();})
    .then((json) => {
      if(json !== undefined){
        console.log("json del buscador", json);
      return this.setState({  items: json });
      }
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Movie App</h1>
      
        <SearchMovie search={this.search}/>
       <ResultList items={this.state.items || []}/>
        {/*<ResultItem/>*/}
      </div>
    );
  }
}

export default App;
