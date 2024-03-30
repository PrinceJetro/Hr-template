import React from "react";
import { ReactDOM } from "react";
import Navbar from '../components/navbar';
import "../styles/home.css";
import { Outlet, Link } from "react-router-dom";
import logo from "../images/logo.png"
import firstwoman from "../images/firstwoman.jpg"
import Icon from "./iconlist";
import Featured from "./featuredjobs";
import Services from "./hrservices";
import Testimonials from "./testimonials";


export default function Home(){
    return(
        <div className="container-fluid">
                <Navbar/>         

                <div className="hr_consult">
                    <div className="div1">
                    <h1>HR CONSULT</h1>
                    <h5>Through meaningful and objective research into your organization, competitors, and marketplace, we strive to understand your hiring needs and requirements.</h5>
                    <div className="div2">
                        <button className="btn btn-danger">
                            <a href="#services_list">Our Services</a> 
                        </button>
                        <button className="btn btn-light">
                        <Link to={"/application"}>Get a Quote</Link>
                        </button>

                    </div>


                    </div>
                </div>   

                <div className="welcome row">
                    <div className="col-sm-6 left p-2">
                        <h3 className="text-center">HR <span className="text-primary">Consult!</span></h3>
                        <p className="believe">We believe in the value that our functions add to a business. We feel that this specialist part of HR is often unrecognised for its contribution to the profitability and success of a business.</p>
                        <Icon/>
                    </div>
                    <div className="col-sm-6 right" id="right">
                        <img src={firstwoman}/>
                    </div>
                </div>

                <Services/>
                <h1 className="featured_header text-primary">Latest Jobs</h1>
                <Featured/>
                <h1 className="testimonnial_header text-primary">Testimonials</h1>
                <Testimonials/>
                <div className="reach_us row">
                    <div>
                        <h3>CALL US 24/7</h3>
                        <p>+123-456-7890</p>
                    </div>
                    <div>
                        <h3>EMAIL ADDRESS</h3>
                        <p>example@example.com</p>
                    </div>
                    <div>
                        <h3>OPEN HOURS</h3>
                        <p>Daily 9:00-20:00</p>
                    </div>

                </div>
        </div>
    )
}