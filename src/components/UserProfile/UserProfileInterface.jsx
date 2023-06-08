import React, { useState } from 'react'
import './UserProfileInterface.css'
import logo from '../../images/logo.png'
import logo1 from '../../images/Ellipse 2.png'
import logo2 from '../../images/Vector (2).png'
import logo3 from '../../images/Handshake Heart.png'
import { Avatar, Card, CardContent, Typography, Button} from '@material-ui/core'

import Orders from './Orders'

const UserProfileInterface = () => {
  //selecting image
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='interface'>
      <div className="interface-uppernav">
        <h6><img src={logo3} />One Hand For Others</h6>
      </div>
      <div className="interface-lowernav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" width="100" height="54" />
            </a>
          </div>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ position: "relative", right: "163px" }}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 lower-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Lunchello</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Our Story</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Causes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Food Warrior</a>
                </li>
              </ul>
              <p className='nav-item'>Menu</p>
            </div>
          </div>
        </nav>
      </div>
      {/* user profile form card */}
      <div className="interface-content">
        <Card className='Card' style={{ textAlign: "center",  backgroundColor: "#E4E8E9" }}>
          <CardContent>
          {/* heading */}
            <Typography className="account-settings-heading">Account Settings</Typography>
            <div>
              <label htmlFor="imageInput">
                <img src={image || logo1} className="circle-image" alt="" width="100" height="100" style={{ marginTop: "25px", cursor: "pointer" }} />
              </label>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
            {/* buttons */}
            <div className="button">
              <Button className="custom-button" id="btn1">My Profile</Button>
              <Button className="custom-button" id="btn2">My Orders</Button>
              <Button className="custom-button" id="btn3">Settings</Button>
            </div>
            <div className="logout-container">
              <img className="img2" src={logo2} alt="" width="20" height="20" />
              <p className="text">Log Out</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          
        </Card>
       
        <div className="form-container">
          <Orders/>
        </div>
      </div>

    </div> 
  )
}

export default UserProfileInterface;
