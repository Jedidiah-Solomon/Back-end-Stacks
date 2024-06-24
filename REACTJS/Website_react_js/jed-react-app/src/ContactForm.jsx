import React, { useState } from "react";
import PropTypes from "prop-types";

const ContactForm = ({ handleFormSubmit }) => {
    const [contactData, setContactData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        phoneNumber: "",
        country: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactData((prevContactData) => ({
            ...prevContactData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass form data to parent component's handleFormSubmit handler
        handleFormSubmit(contactData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={contactData.firstName}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={contactData.lastName}
                onChange={handleInputChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={contactData.email}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={contactData.username}
                onChange={handleInputChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={contactData.password}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={contactData.phoneNumber}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="country"
                placeholder="Country"
                value={contactData.country}
                onChange={handleInputChange}
            />
            <textarea
                name="message"
                placeholder="Message"
                value={contactData.message}
                onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

ContactForm.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
