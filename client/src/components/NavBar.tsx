import { useUser } from "../context/UserContext";
import LogoutButton from "./LogoutButton";
function NavBar(){
    const { user, login, logout } = useUser();
    return (
        <div className="navbar">
            <div className="logo"><h1>Tasky</h1></div>
            <div>
                {user? 
                <div> <span>Hi there, {user.username}</span> <LogoutButton></LogoutButton></div>
                : (<div><a href="/login">Sign in</a> | <a href="/signup">Sign up</a></div>)}
            </div>
        </div>
    );
};

export default NavBar;