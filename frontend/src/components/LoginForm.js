import {useEffect, useState} from 'react';
import '../css/components/loginForm.css';
import axios from 'axios';
function LoginForm(){
    // [username,setUsername]=useState("");
    // [password,setPassword]=useState("");

    let [inputs,setInputs]=useState({username:'',password:''});

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs((values)=>({...values,[name]:value}));
        console.log(inputs);
    }

    const formSubmit=(event)=>{
        handleSubmit();
    }

    async function handleSubmit(){
        const data=await axios.post('http://localhost:3001/Login',inputs);

    }

    useEffect(()=>{handleSubmit();},[]);

    return <div class="form">
            <form onSubmit={formSubmit}>
                <center><h1 class="formLabel">Sign In</h1></center>
                <input type="text" name="username" required value={inputs.username} onChange={handleChange} placeholder='Username'/><br/>
                <input type="password" name="password" required value={inputs.password} onChange={handleChange} placeholder='Password'/><br/>
                <center><input type="submit"/></center>
            </form>
        </div>
}

export default LoginForm;