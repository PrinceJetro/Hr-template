import React from "react";
import ReactDOM from "react-dom"; // Correct import
import "../styles/iconlist.css";
import data from "../data/iconlist_data";

export default function Icon() {
    const mylist = data.map(item => (
        <span key={item.id}> {/* Make sure to add a unique key */}
            <i className={`${item.icon} m-3`}></i>
            <span className="number mr-1">{item.number}</span> 
            <span className="description">{item.description}</span> {/* Fixed typo */}
            <hr />
        </span>
    ));

    return (
        <div className="icon_list">
            {mylist}
        </div>
    );
}
