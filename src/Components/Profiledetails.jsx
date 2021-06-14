import React from 'react'
import {Form} from "react-bootstrap";
import "./Profiledetails.css";


function Profiledetails(props) {
    return (
        <div className="Profiledetails">

            <Form className="container-wrapper-profiledetails">
            <div style={{marginLeft:'57px'}}><Form.Label className="Profiledetails-Header">Profile Detail Page</Form.Label>
                        <img src={props.location.state.Picture}></img></div>
                      <div className="font-style-div"> 
                          <div>
                        <Form.Label className="control-label col-sm-4">Title</Form.Label>
                        <Form.Label >{props.location.state.Title}</Form.Label>
                        </div>
                        <div>
                        <Form.Label className="control-label col-sm-4">First Name</Form.Label>
                        <Form.Label >{props.location.state.Firstname}</Form.Label>
                        </div>
                        <div>
                        <Form.Label className="control-label col-sm-4">Last Name</Form.Label>
                        <Form.Label >{props.location.state.Lastname}</Form.Label>
                        </div> 
                          <div>
                        <Form.Label className="control-label col-sm-4">Email </Form.Label>
                        <Form.Label >{props.location.state.Email}</Form.Label>
                        </div>  
                        </div>     
            </Form>
        </div>
    )
}

export default Profiledetails;
