import React, { Component } from 'react'
import Newitem, { Newsitem } from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  articles = []
  
    constructor(){
      super();
      
      console.log("Hello I am constructor from News Component");
      this.state = {
        articles: this.articles,
      loading : false,
      page:1
    }
    }

    handlePrevious = async ()=>{

      console.log("Previous");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=b9cc94f95f3a4a45867e7830329787e8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles:parsedData.articles,
        loading:false
      })
    }

     handleNext = async()=>{
      console.log("Next");

      if(this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize)){
        console.log("IF");
      } 
      else{

      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=b9cc94f95f3a4a45867e7830329787e8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles:parsedData.articles, 
        loading : false

      })
    }
    }

    async componentDidMount(){
      console.log("CDM");
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles:parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
        
      })
      this.props.setProgress(100);
    }

    fetchMoreData = async() =>{

   
      this.setState({page : this.state.page + 1,
      
      })
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        loading:false
        
      })
    }
  render() {
    return (
      <>
        <h1 className='text-center'> NewsMonkey - Top {this.state.category} Headlines</h1>
        {/* {this.state.loading && <Spinner/>} */}
        
        <h2> Daily News Here</h2>
        <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              //style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
              // inverse={true} //
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner/>}
              //scrollableTarget="scrollableDiv"
            >
          <div className='container'>
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{

            return <div className="col-md-3" key={element.url}>
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
}

export default News;
