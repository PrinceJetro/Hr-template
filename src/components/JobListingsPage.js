import React, { useEffect, useState } from 'react';
import { ReactDOM } from "react";
import Navbar from '../components/navbar';
import "../styles/joblist.css";
import job_data from "../data/job_data";


export default function JobList(){
    const [filter, setFilter] = useState([]);

    const myList = job_data.map(item=>(
        <div className="col-sm-6 p-5" id={item.title}>
        <span className=" title">{item.title}</span>
        <hr/>
        <h3>JOB DESCRIPTION:</h3>
        <p>{item.description}</p>
        <h3>REQUIRED SKILLS:</h3>
        <ul>
            <li>{item.skill1}</li>
            <li>{item.skill2}</li>
            <li>{item.skill3}</li>
        </ul>
        <button className="btn btn-success"> <a href={item.link}>Apply Now</a> </button>
    </div>
    ))


    const searchFunction = (event) => {

        const searchTerm = event.target.value.toUpperCase();
      
        if (searchTerm) {
          const filteredData = job_data.filter(item =>
            item.title.toUpperCase().includes(searchTerm)
          );
      
          // Log or use the filteredData array as needed
          console.log(event.target.value);
          setFilter(filteredData);
          console.log(`This is the ${filter.title}`)
        } else {
          console.log(`Search term must be at least 2 characters.`);
          setFilter([])
        }
      };


    return(
        <div className="job">
            <Navbar/>         

            <div className="row1">
            <h1 className="job_header">Find the most exciting Jobs</h1>
            <div className="row mt-5">
                <div className="col-sm-6"><input  onChange={searchFunction} type="search" placeholder="Job Title"/></div>
                <div className="col-sm-6"><button className="find_j0b_btn">FInd Job</button></div>
            </div>
            <ul className='search-results'>
            {
            filter.map((item, index, key) => 
            <a href={`#${item.title}`}  key={index}>
            <li>{item.title}</li>
            </a>
            )
            }
            </ul>
            </div>
            <h1 className="available_jobs">Available Jobs</h1>
            <div className="row">
                {myList}
            </div>

            <div className="how_it_works_div">
                <p className="apply_process">APPLY PROCESS</p>
            <h1 className="how_it_works_header">How it works</h1>

            <div className="how_it_works">
    <div className="steps"> 
        <i className="fa fa-search"></i>
        <h1>1. Search a job</h1>
        <p>Search for available job openings in your desired location and field.</p>
    </div>
    <div className="steps"> 
        <i className="fa fa-hourglass-1"></i>
        <h1>2. Apply for a job</h1>
        <p>Submit your application for the job positions that match your skills and qualifications.</p>
    </div>
    <div className="steps"> 
        <i className="fa fa-check"></i> 
        <h1>3. Get hired</h1>
        <p>Once selected, complete the necessary steps to join the company and start your new job.</p>
    </div>
</div>


            </div>


        </div>
    )
}