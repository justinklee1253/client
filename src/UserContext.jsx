import { createContext, useEffect, useState } from "react"; //createContext used to create a context object
import axios from "axios";

export const UserContext = createContext({}); //context will hold data about user that can be shared across different parts of app

//A context helps share data across multiple components without passing props manually at every level

export function UserContextProvider({children}){
    const [username, setUsername] = useState(null);
    const [id, setId] = useState(null);

    //when component mounts, we want to fetch user info if there's any from our profile endpoint 
    useEffect(() => {
        axios.get('/profile').then(response => {
            console.log(response.data);
        });
    }, []);

    return (
        <UserContext.Provider value={{username, setUsername, id, setId}}>{children}</UserContext.Provider>
        //any component inside of the provider can access and update the state variable of username and id
        //useContext 
    );
}