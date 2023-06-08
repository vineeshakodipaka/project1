import React,{useState} from 'react'
import './Otpscreen.css'
import { Button, Card, CardContent, FormControl, Input, InputLabel, TextField, Typography } from '@material-ui/core'
import {Row,Form} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
const Otpscreen = () => {
    const [mobileNo, setMobileNo] = useState('');

    const handleMobileNoChange = (e) => {
        const numericValue = e.target.value.replace(/[^0-9+-]/g, ''); // Remove non-numeric characters except + and -
        setMobileNo(numericValue);
      };
      
  return (
    <div id="form1" >
          
    <Form className="mt-4 " >
      <p className='head-form 4 mb-5' >Settings</p>
      <Row className="mb-5 justify-content-center justify-content-sm-start"  >
      <Form.Group as={Col} md="5" xs="5"   >
        <Form.Label className='labels' id="formlabels" >Mobile No.</Form.Label>
       <Form.Control className="input-field"  type="tel"  value={mobileNo}
    onChange={handleMobileNoChange} name="" placeholder="+91-8567085690" />
      </Form.Group>
      <Col md={1} className="d-none d-md-block"></Col>
      <Form.Group as={Col} md="5" xs="5"  >
         <Form.Label className='labels' id="formlabels" >Verify</Form.Label>
       <Form.Control className="input-field"   type="text" name="" placeholder="Enter OTP" />
      </Form.Group>
      </Row>
      <Row className="mb-5 justify-content-center justify-content-sm-start"  >
      <Form.Group as={Col} md="5" xs="5"   >
        <Form.Label className='labels' id="formlabels" >Email</Form.Label>
       <Form.Control className="input-field"  type="email" name="" placeholder="e-mail" />
      </Form.Group>
      <Col md={1} className="d-none d-md-block"></Col>
      <Form.Group as={Col} md="5" xs="5"  >
         <Form.Label className='labels' id="formlabels" >Verify</Form.Label>
       <Form.Control className="input-field"   type="text" name="" placeholder="Enter OTP" />
      </Form.Group>
      </Row>
      <Row className="mb-5 justify-content-center justify-content-sm-start"  >
      <Form.Group as={Col} md="5" xs="5"   >
        <Form.Label className='labels' id="formlabels" >Password</Form.Label>
       <Form.Control className="input-field"  type="password" name="" placeholder="*************" />
      </Form.Group>
      <Col md={1} className="d-none d-md-block"></Col>
      <Form.Group as={Col} md="5" xs="5"  >
         <Form.Label className='labels' id="formlabels" >New Password</Form.Label>
       <Form.Control className="input-field"   type="password" name="" placeholder="*************" />
      </Form.Group>
      </Row>     
    <div className="btns mb-3 ">
      <div className="row justify-content-center justify-content-sm-start" >
        <div className="col-auto ">
        <Button className="update-button p-3">Update</Button>
        </div>

      </div>
    </div>
    </Form>
  </div>
  )
}

export default Otpscreen
