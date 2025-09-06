import { createContext, useState } from 'react';



export const MyContext = createContext({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: ""
})



export const MyContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: ""
    });
    return (
        <MyContext.Provider value={{ user, setUser }}>
            {children}
        </MyContext.Provider>
    );
};