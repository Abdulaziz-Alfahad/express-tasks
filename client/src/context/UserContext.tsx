import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface User {
    id: number,
    username: string,
};

interface UserContextType{
    user: User | null,
    login: (user: User) =>void,
    logout: () => void,
};

const UserContext = createContext<UserContextType | undefined> (undefined);

export const UserProvider = ({children} : {children: ReactNode})=>{
    const [user, setUser] = useState<User | null>(null);
    
    useEffect(()=>{
        const storedUser = localStorage.getItem("user");
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
    },[])

    const login = (newUser: User) =>{
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
    } 

    const logout = () =>{
        setUser(null);
        localStorage.removeItem("user");
    } 

    return (<UserContext.Provider value={{user, login, logout}}>
        {children};
    </UserContext.Provider>);
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};