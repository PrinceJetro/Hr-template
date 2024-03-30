import React from "react";
import { ReactDOM } from "react";
import "../styles/featured_jobs.css";
import featured_data from "../data/featured_data"

export default function Featured(){
    const myList = featured_data.map(item =>(
        <div className="featured_jobs row">
        <div className="col-sm-4">
            <h3>{item.title}</h3>
            <p className="company"> <i className="fa fa-google"></i> {item.company} <span class={`badge badge-${item.color}`}>{item.type}</span> </p>
        </div>
        <div  className="col-sm-4">
            <h1 className="location"><i className="fa fa-map-marker mr-2"></i> {item.location}</h1>
        </div>
        <div  className="col-sm-4">
            <button className="btn btn-light apply"> <a href={item.link} target="_blank">Apply Now</a> <i className="fa fa-arrow-right"></i></button>
        </div>
    </div>
    ))
    return(
        <div className="featured_jobs_div">
           {myList}
        </div>
    )
}