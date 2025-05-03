import React from 'react';
import { useUser } from '../context/UserContext';
import { deleteToken } from '../utils/auth';
function LogoutButton(){
    const {logout} = useUser();
    const handleLogout = ()=>{
        logout();
        deleteToken();
        window.location.reload();
    }
    return(<button onClick={handleLogout}>Signout</button>);
}

export default LogoutButton