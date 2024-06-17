import React, { useState } from 'react'; //the useState will manage form data
import axios from 'axios'; //easier for making HTTP requests, gives the ability to send form data to the backend 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

// Create a handlechange function to update form data on user input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

// Create a handlesubmit function to send the form data to the backend using Axios, allow the form to call the handlesubmit on submission and update its state on input changes
// With form submission - prevent default behaviour, send a POST request to the backend with the form data, and handle response accordingly. 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/send-email', formData)
      .then(response => {
        alert('Message sent successfully');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        alert('Failed to send message');
        console.error(error);
      });
  };

  return (
    <main>
      <section id="contact-form-section">
        <h2>Contact Form</h2>
        <div className="form-div">
          <form id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;