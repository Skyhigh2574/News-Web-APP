import React, { Component, useEffect, useState } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import userEvent from '@testing-library/user-event';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const News = (props) => {

  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const [articles, setarticles] = useState([]);

  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  
    // constructor(){
    //   super();
      
    //   console.log("Hello I am constructor from News Component");
    //   this.state = {
    //     articles: this.articles,
    //   loading : false,
    //   page:1
    // }
    // }

    const handlePrevious = async ()=>{

      console.log("Previous");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=b9cc94f95f3a4a45867e7830329787e8&page=${page - 1}&pageSize=${props.pageSize}`;
      setloading(true)
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      setpage(page -1)
      setarticles(parsedData.articles)
      setloading(false)
      
    }

     const handleNext = async()=>{
      console.log("Next");

      if(page > Math.ceil(totalResults/props.pageSize)){
        console.log("IF");
      } 
      else{

      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=b9cc94f95f3a4a45867e7830329787e8&page=${page + 1}&pageSize=${props.pageSize}`;
      setloading(true)
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      setarticles(parsedData.articles)
      setpage(page+1)
      setloading(false)
    
    }
    }

    useEffect(() =>{
      componentDidMount();
    }, [])

    const componentDidMount = async() => {
      setloading(true);
      console.log("CDM");
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
     
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      console.log(parsedData);
      setarticles(parsedData.articles);
      settotalResults(parsedData.totalResults);
      setloading(false);

      props.setProgress(100);
    }

    const fetchMoreData = async() =>{

   
      // this.setState({,
      
      // })
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      setpage(page + 1);
      setarticles(articles.concat(parsedData.articles))
      settotalResults(parsedData.totalResults);
      setloading(false);

    }
 
    return (
      <>
        <h1 className='text-center' style={{margin: '35px 0px', marginTop: '90px'}}> NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {/* {loading && <Spinner/>} */}
        
        <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              //style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
              // inverse={true} //
              hasMore={articles.length !== totalResults}
              loader={<Spinner/>}
              //scrollableTarget="scrollableDiv"
            >
          <div className='container'>
        <div className="row">
        {!loading && articles.map((element)=>{

            return <div className="col" key={element.url}>
            <Newsitem key={element.url} title={element.title?element.title.slice(0, 50): ""} description={element.description?element.description.slice(0, 100):""} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}> This is a NewsItem</Newsitem>
            
            </div>
          

            })}

         </div>
        </div>
        {/* <div className='container d-flex justify-content-between' >
          <button disabled={this.state.page<=1} type='button' class='btn btn-dark' onClick={this.handlePrevious}> &larr; Previous</button>
          <button disabled={this.state.page>= Math.ceil(this.state.totalResults/20)} type='button' class='btn btn-dark' onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
        </InfiniteScroll>
      </>
    )
  }


export default News;
