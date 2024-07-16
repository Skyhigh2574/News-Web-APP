import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

const Newsitem =(props) => {

    let {title, description, imgurl, newsUrl, author, date} =   props;

    return (
        
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p class="card-text"><small class="text-muted"> By {!author?"Unknown":author} on {date}</small></p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  
}

export default Newsitem;
