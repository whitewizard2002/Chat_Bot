import '../css/components/registerForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
function RegisterForm(){

    const [inputs,setInputs]=useState({first_name:"",last_name:"",email_address:"",username:"",password:"",confirm_password:""});
    
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs((values)=>({...values,[name]:value}));
        console.log(inputs);
    }

    async function handleSubmit(){
        const data= await axios.post("http://localhost:3001/Register",inputs);
    };

    const formSubmit=()=>{
        handleSubmit();
    };
    
    // useEffect(()=>{handleSubmit();},[]);

    return <div className="form">
        <form onSubmit={formSubmit}>
        <div className="row mx-auto">
            <h1 class="formLabel">Sign Up</h1>
        </div>
        
        <div className="row mx-auto">
            <div className="col-sm-6">First Name<br/><input type="text" name="first_name" onChange={handleChange}/></div>
            <div className="col-sm-6">Last Name<br/><input type="text" name="last_name" onChange={handleChange}/></div>
        </div>

        <div className="row mx-auto">
            <div className="col-sm-6">Email Address<br/><input type="email" name="email_address" onChange={handleChange}/></div>
            <div className="col-sm-6">Username<br/><input type="text" name="username" onChange={handleChange}/></div>
        </div>

        <div className="row mx-auto"><div className="col-12">Password</div></div>
        <div className="row mx-auto"><div className="col-12"><input type="password" name="password" onChange={handleChange}/></div></div>
        <div className="row mx-auto"><div className="col-12">Confirm Password</div></div>
        <div className="row mx-auto"><div className="col-12"><input type="password" name="confirm_password" onChange={handleChange}/></div></div>
        <div className="row mx-auto"><div className="col-12 d-flex justify-content-center"><input type="submit" value="Register"/></div></div>
            
        </form>
    </div>
}

export default RegisterForm;