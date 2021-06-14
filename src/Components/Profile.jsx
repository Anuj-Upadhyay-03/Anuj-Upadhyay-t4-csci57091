import React,{useState,useEffect} from 'react'
import {Form,FormControl} from "react-bootstrap";
import Axios from "axios";
import "./profile.css";
import {useHistory} from "react-router-dom";


function Profile() {
 const [lista, setlist] = useState([]);
 const [search, setsearch] = useState("");
 const history = useHistory();

 useEffect(()=>{
    Axios.get('https://tutorial4-api.herokuapp.com/api/users/').then((response)=>{
         setlist(response.data.data);
      });
 },[]);

 let first=" ";
 let last=" ";
 let picture=" ";
 let title=" ";
 let email = " ";

  const changePage = (id) => {
      console.log('https://tutorial4-api.herokuapp.com/api/users/'+id);
    Axios.get('https://tutorial4-api.herokuapp.com/api/users/'+id,{'user id':id}).then((response)=>{
        console.log(response.data.data.firstName);
        first =response.data.data.firstName;
        last=response.data.data.lastName;
        picture= response.data.data.picture;
        title=response.data.data.title;
        email=response.data.data.email;

      history.push("/Profiledetails",{Firstname: first, Lastname: last, Picture: picture, Title: title,Email:email}
      );
      });

  }  

    return (
        <div className="Profile">
            <Form >

            <div style={{'maxWidth':'fit-content','marginBottom':'49px',padding: '0px 164px'}}>
                        <Form.Label className="Profile-Header">Profile Page</Form.Label>
                        <FormControl type="search" placeholder="Search name here.." className="mr-2" aria-label="Search" onChange={(event) => setsearch(event.target.value)}/>
                        </div>
                        <div>
                            {lista.map((val,key)=>{
                                if(search===""){
                                return( 
                                            <div className="container-wrapper-profile" id={val.id} onClick={() => changePage(`${val.id}`)}>
                                                <div>
                                                     <img src={val.picture}/>
                                                </div>
                                                <div style={{padding:'20px'}}>
                                                    <div><Form.Label>Firstname : </Form.Label><Form.Label>{val.firstName}</Form.Label></div>
                                                    <div><Form.Label>Lastname : </Form.Label><Form.Label>{val.lastName}</Form.Label></div>
                                                    <div><Form.Label>Email : </Form.Label><Form.Label>{val.email}</Form.Label></div>
                                                </div>
                                             </div>
                                      )
                                 }
                                 else{
                                     
                                     if(search.toLocaleLowerCase() === val.firstName.toLocaleLowerCase() || search.toLocaleLowerCase() === val.lastName.toLocaleLowerCase()){
                                    
                                        return( 
                                            <div className="container-wrapper-profile" id={val.id} onClick={() => changePage(`${val.id}`)}>
                                                <div>
                                                     <img src={val.picture}/>
                                                </div>
                                                <div style={{padding:'20px'}}>
                                                    <div><Form.Label>Firstname : </Form.Label><Form.Label>{val.firstName}</Form.Label></div>
                                                    <div><Form.Label>Lastname : </Form.Label><Form.Label>{val.lastName}</Form.Label></div>
                                                    <div><Form.Label>Email : </Form.Label><Form.Label>{val.email}</Form.Label></div>
                                                </div>
                                             </div>
                                      )
                                     }
                                 }
                            })}
                            </div>       
            </Form>
        </div>
    )
}

export default Profile
