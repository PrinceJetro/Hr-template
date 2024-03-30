import React from "react";
import ReactDOM from "react-dom"; // Correct import
import "../styles/hrservices.css";
import data from "../data/hrservicedata";

export default function Services() {
    const mylist = data.map(item => (
        <div key={item.id} className="services"> 
        <div>
        <img src={item.img}/>
        </div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        </div>
    ));

    return (
        <div className="services_list" id="services_list">
            {mylist}
        </div>
    );
}
