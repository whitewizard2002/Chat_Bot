import {useState} from 'react';
import '../css/components/loginForm.css';
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
        
    }

    return <div class="form">
            <form onSubmit={formSubmit}>
                <center><h1 class="formLabel">Sign In</h1></center>
                <input type="text" name="username" required value={inputs.username} onChange={handleChange} placeholder='Username'/><br/>
                <input type="password" name="password" required value={inputs.password} onChange={handleChange} placeholder='Password'/><br/>
                <center><input type="submit" onClick={formSubmit}/></center>
            </form>
        </div>
}

export default LoginForm;