import React, { createContext, useContext, useState, ReactNode } from "react";

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
    
    const login = (newUser: User) => setUser(newUser);

    const logout = () => setUser(null);

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