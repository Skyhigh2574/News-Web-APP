import logo from './logo.svg';
import './App.css';
import React, {Component, Fragment} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component{

  apikey = "b9cc94f95f3a4a45867e7830329787e8";
  state ={progress:0}

  setProgress = (progress)=>{
    this.setState({progress: progress})
  };


c = 'John';
  render(){
   
    return(
     
      <div>
         <Router>
         <Fragment>
            <NavBar/>
            <LoadingBar
            color= '#f11944'
            progress= {this.state.progress}
            />
            
          <Routes>
          <Route exact path='/general' element = {<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={5} country='in' category='general'/>} />
            <Route exact path='/business' element = {<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={5} country='in' category='business'/> } />
            
            <Route exact path='/sports' element = {<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={5} country='in' category='sports'/> } />
            <Route exact path='/entertainment' element = {<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={5} country='in' category='entertainment'/> } />
            <Route exact path='/science' element = {<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={5} country='in' category='science'/> } />
            <Route exact path='/health' element = {<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={5} country='in' category='health'/> } />
            <Route exact path='/technology' element = {<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={5} country='in' category='technology'/> } />
            
          </Routes>
          </Fragment>
        </Router>
      </div>
      
    )
  }
}