import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export default function Register() {
    const [username, setUsername] = useState(''); //we want Register component to remember username
    //when someone enters username into input field, we want to set the input field to have that value
    //username = state variable (retain username data) --> setUsername = state setter function (to update variable + re-render)
    const [password, setPassword] = useState('');
    const {setUsername: setLoggedInUsername, setId} = useContext(UserContext); //useContext hook used to access setUsername and setId from UserContext to manage state for Register Comp

    //when someone clicks register, we want to send the form to our API from our frontend

    async function register(ev) { 
        ev.preventDefault(); //{data} is holding the response from the server 
        const {data} = await axios.post('/register', {username,password}); //library for making HTTP requests from node or web browser
        setLoggedInUsername(username); //username is set in the state to reflect the logged in user 
        setId(data.id); //id from the server's response set 
    }

    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={register}>
                <input value={username}
                onChange={ev => setUsername(ev.target.value)} //triggered when input value changed from entering text
                //arrow function takes argument event object, access DOM element that triggered event
                //targets the 'value' attribute given to input 
                type="text" 
                placeholder="username"
                className="block w-full rounded-sm p-2 mb-2 border"/>

                <input value={password}
                onChange={ev => setPassword(ev.target.value)}
                //password state variable held by 'value' should update whenever user types + re-render
                type="password" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border"/>
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">Register</button>
            </form>
        </div>
    );
}