import React from 'react'
import './UserProfileForm.css'
import { Button, Card, CardContent, FormControl, Input, InputLabel, TextField, Typography } from '@material-ui/core'
import {Row,Form} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const UserProfileForm = () => {
    return (
      
        <div id="form1" >
          
          <Form className="mt-4 " >
            <p className='head-form 4 mb-4' >My Profile</p>
            <Row className="mb-4 justify-content-center justify-content-sm-start"  >
            <Form.Group as={Col} md="5" xs="5"   >
              <Form.Label className='labels' id="formlabels" >First name</Form.Label>
             <Form.Control className="input-field"  type="text" name="firstName" placeholder="First name" />
            </Form.Group>
            <Col md={1} className="d-none d-md-block"></Col>
            <Form.Group as={Col} md="5" xs="5"  >
               <Form.Label className='labels' id="formlabels" >LAST NAME</Form.Label>
             <Form.Control className="input-field"   type="text" name="" placeholder="Last name" />
            </Form.Group>
            </Row>
            <Row className="mb-4 justify-content-center justify-content-sm-start">
            <Form.Group as={Col} md="5" xs="5"  >
               <Form.Label className='labels' id="formlabels"  >DATE OF BIRTH</Form.Label>
             <Form.Control className="input-field custom-default-value" type="date" name="" defaultValue="2021-12-12"/>
            </Form.Group>
            <Col md={1} className="d-none d-md-block"></Col>
            <Form.Group as={Col} md="5"  xs="5"  >
             <Form.Label className='labels' id="formlabels" htmlFor="inputgender" >GENDER</Form.Label>
             <Form.Select id="inputgender"  className="form-control hideDefaultIcon input-field" name="gender" style={{ backgroundColor: "#E4E8E9" }}>
              <option value="Select Gender">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              </Form.Select  >
            </Form.Group>
            </Row>
            <Row className="mb-4 justify-content-center justify-content-sm-start">
            <Form.Group as={Col} md="5" xs="5"  >
               <Form.Label className='labels' id="formlabels" >CITY</Form.Label>
             <Form.Control className="input-field" type="text" name="" placeholder="Amritsar" />
            </Form.Group>
            <Col md={1} className="d-none d-md-block"></Col>
            <Form.Group as={Col} md="5" xs="5"  >
              <Form.Label className='labels' id="formlabels"  htmlFor="inputState">STATE</Form.Label>
            <Form.Select id="inputState" className="form-control hideDefaultIcon input-field" style={{ backgroundColor: "#E4E8E9"}}>
             <option value="">Choose...</option>
             <option value="Uttar Pradesh">Uttar Pradesh</option>
             <option value="Madhya Pradesh">Madhya Pradesh</option>
             <option value="Andhra Pradesh">Andhra Pradesh</option>
             <option value="Arunachal Pradesh">Arunachal Pradesh</option>
             <option value="Haryana">Haryana</option>
           </Form.Select>
            </Form.Group>
            </Row>
            <Row className="mb-4 justify-content-center justify-content-sm-start">
            <Form.Group as={Col} md="5" xs="5"  >
              <Form.Label className='labels' id="formlabels"  htmlFor="inputProfession" >PROFESSION</Form.Label>
              
              <Form.Select id="inputProfession" className="form-control hideDefaultIcon input-field" style={{ backgroundColor: "#E4E8E9"}}>
              <option selected>Choose...</option>
              <option>Student</option>
              <option>Working</option>
              <option>Retired</option>                           
           </Form.Select>
            </Form.Group>
            <Col md={1} className="d-none d-md-block"></Col>
            <Form.Group as={Col} md="5" xs="5"  >
              <Form.Label className='labels' id="formlabels"  htmlFor="inputwork" >Work Place</Form.Label>
             
             <Form.Select id="inputwork" className="form-control hideDefaultIcon input-field" style={{ backgroundColor: "#E4E8E9"}}>
              <option selected>Choose...</option>
              <option>SCHOOL</option>
              <option>OFFICE</option>
              <option>COLLEGE</option> 
              <option>GYM</option>
              <option>OTHERS</option>                           
           </Form.Select>
           
            </Form.Group>
            
            </Row>
            
            <Row className="mb-4 justify-content-center justify-content-sm-start">
            <Form.Group as={Col} md="5" xs="5" >
               <Form.Label className='labels' id="formlabels" >Workplace&nbsp;name</Form.Label>
             <Form.Control className="input-field" type="text" name="" placeholder="Fit and Hit Gym" />
            </Form.Group>
            <Form.Group as={Col} md="5" xs="5" ></Form.Group>
            </Row>
 
            <Row className="mb-4 justify-content-center justify-content-sm-start">
 
            <Form.Group as={Col}  md="10"  xs="10"  className="position-relative  ">
              <Form.Label className='labels' id="formlabels"  htmlFor="inputAddress">ADDRESS</Form.Label>
             <Form.Control  type="text" name="" id="inputAddress" placeholder="Ranjeet Avenue, circular road" />
            </Form.Group>
            </Row>
            
          <div className="btns mb-3 ">
            <div className="row justify-content-center justify-content-sm-start" >
              <div className="col-auto ">
              <Button className="update-button p-3">Update</Button>
              </div>
             <div className="col-auto">
             <Button className="back-button p-3">Back</Button>
             </div>
            </div>
          </div>
          </Form>
        </div>
    )
}

export default UserProfileForm
    