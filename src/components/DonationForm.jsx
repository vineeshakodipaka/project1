import React from 'react'
import heart from '../images/Handshake Heart.png'
import img1 from '../images/funds donation 1.png'
import './DonationForm.css'
import { KeyboardBackspace } from '@material-ui/icons'
import { TextField, Button, FormControl, InputLabel, MenuItem } from '@material-ui/core'
import Form from 'react-bootstrap/Form'

const DonationForm =() => {
    return (
        <div className='donationform'>
            <div className="donationform-nav">
                <img src={heart} alt="heart" />
                <p>One Hand For Others</p>
            </div>
            <div className="donationform-arrow">
                <KeyboardBackspace />
            </div>
            <div className="donationform-head">
                <h2>DONATION DETAILS</h2>
            </div>
            <div className="donationform-form">
                <TextField id="standard-basic" label="Your Name" variant="standard" />
                <TextField id="standard-basic" label="Your Mobile No." variant="standard" />
                <TextField id="standard-basic" label="City/State" variant="standard" />
                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" label="Amount" variant="standard" />
                <Form.Select aria-label="Default select example" style={{background: "#C7F2AB", color: "black", border: "1px solid black"}}>
                    <option>Payment Methods</option>
                    <option value="1">PayTM</option>
                    <option value="2">Google Pay</option>
                    <option value="3">Phone Pay</option>
                    <option value="3">Online Banking</option>
                    <option value="3">UPI</option>
                </Form.Select>
                <Button variant="contained" style={{ backgroundColor: "#1B5240", color: "white", fontFamily: 'Comfortaa', width: "120px", borderRadius: "20px", position: "relative", top: "20px" }}>Proceed</Button>
            </div>
            <div className="donationform-img">
                <img src={img1} alt="img" />
            </div>
        </div>
    )
}

export default DonationForm
