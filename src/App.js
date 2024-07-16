import logo from './logo.svg';
import './App.css';
import React, {Component, Fragment, useState} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const apikey = "b9cc94f95f3a4a45867e7830329787e8";

  const [progress, setProgress] = useState(0);

   
    return(
     
      <div>
         <Router>
         <Fragment>
            <NavBar/>
            <LoadingBar
            color= '#f11944'
            progress= {progress}
            />
            
          <Routes>
          <Route exact path='/' element = {<News setProgress={setProgress} apikey={apikey} key="General" pageSize={5} country='in' category='general'/>} />
          <Route exact path='/general' element = {<News setProgress={setProgress} apikey={apikey} key="General" pageSize={5} country='in' category='general'/>} />
            <Route exact path='/business' element = {<News setProgress={setProgress} apikey={apikey} key="Business" pageSize={5} country='in' category='business'/> } />
            <Route exact path='/sports' element = {<News setProgress={setProgress} apikey={apikey} key="Sports" pageSize={5} country='in' category='sports'/> } />
            <Route exact path='/entertainment' element = {<News setProgress={setProgress} apikey={apikey} key="Entertainment" pageSize={5} country='in' category='entertainment'/> } />
            <Route exact path='/science' element = {<News setProgress={setProgress} apikey={apikey} key="Science" pageSize={5} country='in' category='science'/> } />
            <Route exact path='/health' element = {<News setProgress={setProgress} apikey={apikey} key="Health" pageSize={5} country='in' category='health'/> } />
            <Route exact path='/technology' element = {<News setProgress={setProgress} apikey={apikey} key="Technology" pageSize={5} country='in' category='technology'/> } />
            
          </Routes>
          </Fragment>
        </Router>
      </div>
      
    )
  
}

export default App;