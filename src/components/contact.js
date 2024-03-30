import React from "react";
import { ReactDOM } from "react";
import "../styles/contact.css";
import Navbar from '../components/navbar';
import location_data from "../data/location_data"


export default function Contact(){
    const mylist = location_data.map(item =>(
        <div className="location">
        <img src={item.img} />
        <h1 className="location_header">{item.location}</h1>
        <p className="street"> <i className="fa fa-map-marker mr-3"></i>{item.str} </p>
        <p className="phone"> <i className="fa fa-phone mr-3"></i> <a href={`tel:${item.tel}`}>{item.tel}</a> </p>
        <p className="email"> <i className="fa fa-envelope mr-3"></i> <a href={`mailto:${item.mail}`}>{item.mail}</a> </p>
    </div>

    ))

    return(
        <div className="contact">
            <Navbar/>
            <div className="intro">
                <h1>CONTACT US</h1>
            </div>
            <div className="reach_us row reach_us_contact">
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

                <div className="locations_div">
                    {mylist}
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.847061619931!2d3.3648399740808435!3d6.540989222961762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dbc92f8babf%3A0x9be1674f92606704!2sPalmgrove%20Bus%20stop!5e0!3m2!1sen!2sng!4v1711717785456!5m2!1sen!2sng" width="100%" height="600" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <div className="conclusion">
                    <div>
                    <h5>TIME TO GET STARTED</h5>
                    <h1>HERE TO HELP YOUR <span>EVERYDAY BUSINESS NEEDS</span></h1>
                    <p>Spend less time doing HR tasks and focus on what matters. Together we translate HR into Business usefulness.</p>
                    <button className="btn"><a href="https://wa.me/2349014680154">CHAT ON WHATSAPP</a></button>

                    </div>
                </div>

        </div>
    )
}