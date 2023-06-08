import React, { useState } from 'react'
import { Button, Card, CardContent, FormControl, Input, InputLabel, TextField, Typography } from '@material-ui/core'
import {Row,Form} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import img1 from '../../images/Cooked Food.png'
import './Orders.css'
const Orders = () => {
  const [data,setData]=useState([
    {
    "OrderdNo":10,
    "Date":"10 June - 10 July",
    "Rs":250,
    "images":img1
    },
    {
      "OrderdNo":11,
      "Date":"11 June - 12 July",
      "Rs":350 ,
      "images":img1 
    },
    {
      "OrderdNo":12,
      "Date":"12 June - 13 July",
      "Rs":450,
      "images":img1
    },
    {
      "OrderdNo":13,
      "Date":"14 June - 14 July",
      "Rs":550,
      "images":img1
    }
  ])
  return (
    <div id="form1" style={{margin:"20px"}} >
   
    
      <p className='head-form 4 mb-4' >Recent Orders</p>
      <div className="btns mb-3 ">
            <div className="row justify-content-center justify-content-sm-start" >
              <div className="col-auto ">
              <Button className="complete-button p-3">Completed</Button>
              </div>
              <div className="col-auto">
              <Button className="process-button p-3">In Process</Button>
              </div>
            </div>
      </div>
      <div>
       {
      data.map((ele,id)=>{
        return(
          <div  className='d-flex justify-content-center rowdiv'>
          <Row  key={id}  mb="5" className='justify-content-center justify-content-sm-start align-items-center orderrow' >
          
          <Col>
          <img src={ele.images} class='foodimg' alt="" width="100" height="82" />
          </Col>
          <Col >
          <p class="happymeals" >Happy Meals</p>
          <p class="orders">ORDER NO:{ele.OrderdNo}</p>
          </Col>
         {/* <Col className='divider'></Col> */}
          <Col>
          <p class="dates" >{ele.Date}</p>
          <Button className="rsbtn" >RS.{ele.Rs}</Button>
          </Col>
          </Row>
          </div>
        )
      })
      }  
     </div>
 
    <div className="btns mb-3 mt-5">
      <div className="row justify-content-center justify-content-sm-start" >
        <div className="col-auto ">
        <Button className="next-button p-3">Next</Button>
        </div>

      </div>
    </div>
   
  </div>
  )
}

export default Orders
