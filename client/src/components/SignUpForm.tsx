import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function SignUpForm(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent)=>{
        try{
            e.preventDefault();
            const payload: any = { firstName, username, password, email };
            if(lastName){
                payload.lastName = lastName;
            }
            const response = await axiosInstance.post('http://localhost:5000/user/create',payload);
            const logIn = await axiosInstance.post('http://localhost:5000/user/login', {
                username,
                password
            })
            const { token } = logIn.data;
            localStorage.setItem('token', token);
            if(token){
                navigate('/');
            }
        }catch(err: any){
            console.log("Sign up error:", err);
            if(err.response){
                setError(err.response.data.message || 'Invalid email or password.');
            }
            else{
                setError("An error occured, please try again later.")
            }
        }        
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <div>
                <label>FirstName</label>
                <input required type="text" value={firstName} onChange={(e) =>{setFirstName(e.target.value)}} />
                <label>LastName</label>
                <input type="text" value={lastName} onChange={(e) =>{setLastName(e.target.value)}} />
            </div>
            <div>
                <label>Username</label>
                <input required type="text" value={username} onChange={(e) =>{setUsername(e.target.value)}} />
            </div>
            <div>
                <label>Email</label>
                <input required type="email" value={email} onChange={(e) =>{setEmail(e.target.value)}} />
            </div>
            <div>
                <label>Password</label>
                <input required type="text" value={password} onChange={(e) =>{setPassword(e.target.value)}} />
            </div>
            <button type="submit">Sign up</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
    )
}