import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact section-bg-contact">
            <h2 className="section-title">Contact</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea rows="5" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
            <div className="contact-info">
                <p><i className="fa-solid fa-envelope"></i> kspkalyan116@gmail.com</p>
                <p><i className="fa-solid fa-phone"></i> +91-XXXXXXXXXX</p>
            </div>
        </section>
    );
};

export default Contact;