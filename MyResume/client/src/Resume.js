import React from "react"; // Import React for JSX.
import "./Resume.css"; // Import component styles.

const Resume = () => { // Define the resume component.
    return (
        <div className="resume"> {/* Wrap the resume content. */}
            {/* Render the header with the student's name and contact details. */}
            <header className="header">
                <h1>Nikolaj Wochnik</h1> {/* Show the student's name. */}
                <p>123 Main Street, Anytown USA, 12345 | (123) 456-7890 | studentname@email.com</p> {/* Show contact details. */}
            </header>

            {/* Render the education section and its degree entries. */}
            <section className="section">
                <h2>Education</h2> {/* Label the education section. */}
                <div className="education">
                <h3>Master of Science in Computer Science</h3> {/* Show the master's degree. */}
                <p>University of XYZ, Anytown USA | May 2023</p> {/* Show the master's school and date. */}
                <p>GPA: 4.0/4.0</p> {/* Show the master's GPA. */}
                <h3>Bachelor of Science in Computer Animation</h3> {/* Show the bachelor's degree. */}
                <p>University of ABC, Anytown USA |May 2021</p> {/* Show the bachelor's school and date. */}
                <p>GPA: 3.8/4.0</p> {/* Show the bachelor's GPA. */}
                </div>
            </section>

            {/* Render the skills section and its list of skills. */}
            <section className="section">
                <h2>Skills</h2> {/* Label the skills section. */}
                <div className="skills">
                    <ul>
                        <li>JavaScript (React, Node.js)</li> {/* Show JavaScript and related frameworks. */}
                        <li>HTML & CSS</li> {/* Show HTML and CSS. */}
                        <li>Java & Spring Boot</li> {/* Show Java and Spring Boot. */}
                        <li>MySQL</li> {/* Show MySQL. */}
                        <li>Git & GitHub</li> {/* Show Git and GitHub. */}
                    </ul>
                </div>
            </section>

            {/* Render the work experience section with job titles, companies, dates, and descriptions. */}
            <section className="section">
                <h2>Work Experience</h2> {/* Label the work experience section. */}
                <div className="experience">

                    <h3>Software Engineering Intern</h3> {/* Show the job title. */}
                    <p>Tech Company Inc. | June 2022 – August 2022</p> {/* Show the company and dates. */}
                    <ul>
                        <li>Developed frontend features using React.</li> {/* Describe the frontend work. */}
                        <li>Improved UI performance by optimizing components.</li> {/* Describe the performance improvements. */}
                        <li>Collaborated with backend team using REST APIs.</li> {/* Describe the collaboration with backend. */}
                    </ul>

                    <h3>IT Support Assistant</h3> {/* Show the job title. */}
                    <p>University of XYZ | September 2021 – May 2022</p> {/* Show the company and dates. */}
                    <ul>
                        <li>Provided technical support for students and staff.</li> {/* Describe the technical support role. */}
                        <li>Maintained computer lab systems.</li> {/* Describe the maintenance of computer lab systems. */}
                    </ul>

                </div>
            </section>

            {/* Render the projects section with project descriptions and links. */}
            <section className="section">
                <h2>Projects</h2> {/* Label the projects section. */}
                <div className="projects">
                    <h3>Personal Website</h3> {/* Show the personal website project. */}
                    <p>
                        Built a personal website using React and deployed it on GitHub Pages</p> {/* Describe the personal website project. */}
                    <p>
                        Source code:{" "} {/* Label the source link. */}
                        <a href="https://github.com/studentname/personal-website" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            {/* Show the personal website repository URL. */}
                            https://github.com/studentname/personal-website
                        </a>
                    </p>

                    <h3>Online Bookstore</h3> {/* Show the online bookstore project. */}
                    <p>
                        Developed a web application for an online bookstore using Spring Boot and MySQL
                    </p> {/* Describe the bookstore project. */}
                    <p>
                        Source code:{" "} {/* Label the source link. */}
                        <a 
                        href="https://github.com/studentname/online-bookstore" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            {/* Show the online bookstore repository URL. */}
                            https://github.com/studentname/online-bookstore
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Resume; // Export the component.