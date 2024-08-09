//file will determine what type of view we want to show
import Register from "./Register";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";

export default function Routes() {
    const {username, id} = useContext(UserContext); //grab username and id from UserContext context
    if (username) {
        return 'logged in!';
    }


    return (
        <Register/>
    )
}