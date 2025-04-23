import axiosInstance from "../api/axiosInstance";
import { useState } from "react";

function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<String | null>(null);
    
    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        setError(null);
        try{
            const response = await axiosInstance.post('http://localhost:5000/user/login', {
                username,
                password
            })
            const { token } = response.data;
            localStorage.setItem('token', token);
            alert("You are signed in")
        }catch(err:any){
            console.log("Sign in error:", err);
            if(err.response){
                setError(err.response.data.message || 'Invalid email or password.');
            }
            else{
                setError("An error occured, please try again later.")
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign in form</h2>
            <div>
                <label>Username:</label>
                <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                 />
            </div>
            <div>
                <label>Password:</label>
                <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginPage;