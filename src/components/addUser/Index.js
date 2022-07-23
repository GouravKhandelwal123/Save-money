import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
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
        const { firstName, lastName, email, phone, balance } = user;
        if (firstName && lastName && email && phone && balance) {
            const response = await fetch(
                'https://banking-application-8a0b8-default-rtdb.firebaseio.com/Users.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName, lastName, email, phone, balance,
                    })
                }
            )
            if (response) {
                setUser({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    balance: "",
                });
            }

            alert("New User added successfully");
        }
        else {
            alert("Please fill all fields !!")
        }

    };
    return (
        <div className="container">
            <div className='m-3'>
                <form method='post'>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label for="firstName">First name</label>
                            <input onChange={handleOnChange} type="text" className="form-control" name='firstName' placeholder="First name" value={user.firstName} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="lastName">Last name</label>
                            <input onChange={handleOnChange} type="text" className="form-control" name='lastName' placeholder="Last name" value={user.lastName} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="email">Email</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><EmailIcon /></span>
                                </div>
                                <input onChange={handleOnChange} type="text" className="form-control" name='email' placeholder="E-mail" aria-describedby="inputGroupPrepend2" value={user.email} required />
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="phone">Phone</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" ><PhoneAndroidIcon /></span>
                                </div>
                                <input onChange={handleOnChange} className="form-control" type="number" name="phone" value={user.phone} />
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="balance">Balance</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" ><AccountBalanceWalletIcon /></span>
                                </div>
                                <input onChange={handleOnChange} className="form-control" type="number" name="balance" value={user.balance} />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={handleOnSubmit} type="submit">Submit form</button>
                </form>
            </div>
        </div>

    )
}

export default AddUser