import React from 'react';

const Certificates = () => {
    const certificates = [
        { title: "CLA: Programming Essentials in C", issuer: "Cisco Netcad" },
        { title: "Networking Essentials", issuer: "Cisco Netcad" },
        { title: "IOT Fundamentals: Big Data & Analytics", issuer: "Cisco Netcad" },
    ];

    return (
        <section id="certificates" className="certificates section-bg-certificates">
            <h2 className="section-title">☃︎ Certificates ☃︎</h2>
            <div className="certificates-list">
                {certificates.map((certificate, index) => (
                    <div className="certificate-item" key={index}>
                        <h3>{certificate.title}</h3>
                        <p>{certificate.issuer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;