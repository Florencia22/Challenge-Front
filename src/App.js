import { Component } from 'react';
import React from 'react';
import './App.css';
//import Demo from './Components/Demo';
//import ResultItem from './Components/ResultItem';
import ResultList from './Components/ResultList';
import SearchBox from './Components/SearchBox';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items:""
    }
  }
  
  componentDidMount(){
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=atari%202600')
    .then(res=>{ return res.json();})
    .then((json) => {
      if(json !== undefined){
        this.setState({ items: json });
        console.log(this.state.items.results);
      }
    })
  }
  search = (datos) => {
    const DATO = datos;
    console.log(DATO);

    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + encodeURI(DATO))
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
        <h1>Guayerd - MELI</h1>
        {/*<Demo />*/}
        <SearchBox search={this.search}/>
        <ResultList items={this.state.items.results || []}/>
        {/*<ResultItem/>*/}
      </div>
    );
  }
}

export default App;
