import React, { useState } from "react";
import {Button,Form} from "react-bootstrap";
import "./Login.css";
import Axios from "axios";
import {useHistory} from "react-router-dom";

 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

 const submit = () => {
     if(email.length===0)
     {
        setMessage("Email id cannot be empty!!");
     } else{
      if(password.length===0)   {
        setMessage("Password cannot be empty!!");
      }
      else{
          Axios.post('https://tutorial4-api.herokuapp.com/api/users/login',{email:email,password:password}).then((response)=>{
        if(response.data.message==="Login successful"){
           history.push("/Profile");    
        }
        else{
            alert("Enter correct Username password!! ")
        }
      })
      .catch(({message}) => {
        setMessage("Access Denied!!");
    })
  }
}
}

  
  
  return (
    <div className="Login">
            <Form className="container-wrapper" onSubmit={handleSubmit}>
                        <Form.Label className="Login-Header">Login</Form.Label>
                    <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Label style={{color:'red'}}>{message}</Form.Label>
                    <Button onClick={submit}>
                    Login
                    </Button>
            </Form>
    </div>
  );
}
export default Login;