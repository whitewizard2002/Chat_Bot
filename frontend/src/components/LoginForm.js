import {useState} from 'react';

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
        window.alert(inputs.password);
    }

    return <div class="form">
        <form onSubmit={formSubmit}>
            <input type="text" name="username" required value={inputs.username} onChange={handleChange} placeholder='Username'/>
            <input type="password" name="password" required value={inputs.password} onChange={handleChange} placeholder='Password'/>
            <input type='submit'/>
        </form>
    </div>
}

export default LoginForm;