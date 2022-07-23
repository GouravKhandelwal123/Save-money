import React, { useState } from 'react';
// import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import moment from 'moment';

const Transfer = () => {
    const [user, setUser] = useState({
        senderEmail: "",
        receiverEmail: "",
        amount: "",
        time: "",
    });
    let name, value;
    const handleOnChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    };
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const { senderEmail, receiverEmail, amount, time } = user;
        if (senderEmail && receiverEmail && amount) {
            const response = await fetch(
                'https://banking-application-8a0b8-default-rtdb.firebaseio.com/Transactions.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        senderEmail, receiverEmail, amount, time,
                    })
                }
            )
            if (response) {
                setUser({
                    senderEmail: "",
                    receiverEmail: "",
                    amount: "",
                    time: moment().valueOf().toString(),
                });
            }

            alert("Money transfer successfully");
        }
        else {
            alert("Please fill all fields !!")
        }
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            {/* <Card sx={{ maxWidth: 345 }}> */}
            <TextField
                required
                id="senderEmail"
                name='senderEmail'
                label="Your Email"
                defaultValue=""
                variant="standard"
                type="email"
                value={user.senderEmail}
                onChange={handleOnChange}
            />
            <TextField
                required
                id="receiverEmail"
                name='receiverEmail'
                label="Friend Email"
                defaultValue=""
                variant="standard"
                value={user.receiverEmail}
                onChange={handleOnChange}
            />
            <TextField
                required
                id="amount"
                name='amount'
                label="Amount"
                defaultValue=""
                variant="standard"
                value={user.amount}
                onChange={handleOnChange}
            />
            <Fab onClick={handleOnSubmit} className='m-3' color="#f44336" variant="extended">
                Send Money
                <SendIcon sy={{ mr: 1 }} />
            </Fab>
            {/* </Card> */}

        </div>
    )
}

export default Transfer;