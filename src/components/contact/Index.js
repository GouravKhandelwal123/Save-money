import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        message: "",
    });
    let name, value;
    const handleOnChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    };
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = user;
        if (name && email && message) {
            const response = await fetch(
                'https://banking-application-8a0b8-default-rtdb.firebaseio.com/contacts.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name, email, message,
                    })
                }
            )
            if (response) {
                setUser({
                    name: "",
                    email: "",
                    message: "",
                });
            }

            alert("Your query is Submitted");
        }
        else {
            alert("Please fill all fields !!")
        }

    };

    return (
        <div className="box">
            <form className="form">
                <h1>Contact Us 🤳</h1>

                <label>Name</label>
                <input
                    name="name"
                    placeholder="Name"
                    value={user.name}
                    onChange={handleOnChange}
                />

                <label>Email</label>
                <input
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleOnChange}
                />

                <label>Message</label>
                <textarea
                    name="message"
                    placeholder="Message"
                    value={user.message}
                    onChange={handleOnChange}
                ></textarea>

                <button
                    onClick={handleOnSubmit}
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;