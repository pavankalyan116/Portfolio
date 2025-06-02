import React from 'react';

const Education = () => {
    return (
        <section id="education" className="education section-bg-education">
            <h2 className="section-title">☯︎ Education ☯︎</h2>
            <div className="education-list">
                <div className="education-item">
                    <h3>Bachelor of Technology in Computer Science and Engineering <span className="year">2020-24</span></h3>
                    <p>MANAV RACHNA University, Faridabad</p>
                    <p>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management Systems</p>
                    <p>Artificial Intelligence, Machine Learning, Operating Systems, Computer Networks</p>
                </div>
                <div className="education-item">
                    <h3>Intermediate (+2) <span className="year">2018-20</span></h3>
                    <p>Narayana Junior College, Vijayawada</p>
                    <p>Specialization: Mathematics, Physics, Chemistry</p>
                </div>
                <div className="education-item">
                    <h3>SSC <span className="year">2018</span></h3>
                    <p>Sri Chaitanya High School, Vijayawada</p>
                </div>
            </div>
        </section>
    );
};

export default Education;