import React from "react";
import Navbar from '../components/navbar';
import "../styles/application.css"

export default function ApplicationForm() {

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting normally
        // Get form field values
        const name = document.getElementById('nameInput').value;
        const phoneNumber = document.getElementById('phoneInput').value;
        const email = document.getElementById('emailInput').value;
        const jobSector = document.getElementById('jobInput').value;
        const comments = document.getElementById('commentsInput').value;

        
        if (!name || !phoneNumber || !email || !jobSector || !comments) {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Please make sure to attach your CV when sending the email.");
        
        
        // Construct email body
        const emailBody = `
    Dear Hiring Manager,

I am writing to provide my contact information for potential future opportunities. Please find below my details:

Full Name: ${name}
Phone Number: ${phoneNumber}
Email Address: ${email}
Job Sector of Interest: ${jobSector}

Additionally, I would like to share the following comments:

${comments}

Please find attached my CV for your reference. I would appreciate the opportunity to discuss any potential opportunities further.

Thank you for considering my information. I look forward to any potential opportunities that may arise.

Sincerely,
${name}
`;
        
        
        // Encode email body for mailto URL
        const encodedEmailBody = encodeURIComponent(emailBody);
        
        // Create mailto URL with encoded email body
        const mailtoURL = `mailto:someone@example.com?body=${encodedEmailBody}`;
        
        // Open default email client with pre-filled email body
        window.location.href = mailtoURL;
    };

    return (
        <div className="application">
            <Navbar/>  
            <form onSubmit={handleSubmit} id="emailForm">
                <div className="form_div">
                    <h4 className="text-center">SUBMIT</h4>
                    <h1 className="text-center">CANDIDANCY</h1>
                    <div className="row text-center">
                        <div className="col-sm-6 div1">
                            <input type="text" id="nameInput" placeholder="Full Name"/>
                            <input type="tel" id="phoneInput" placeholder="Phone Number"/>
                            <input type="email" id="emailInput" placeholder="Email Address"/>
                            <input type="text" id="jobInput" placeholder="Job Sector"/>
                        </div>
                        <div className="col-sm-6 div2">
                            <textarea id="commentsInput" placeholder="Comments"></textarea>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn">SUBMIT</button>
                    </div>
                </div>   
            </form>
        </div>
    );
}
