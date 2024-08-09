import axios from "axios";
import { UserContextProvider} from "./UserContext";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = 'http://localhost:4040'; //set default base URL for all axios requests.
  axios.defaults.withCredentials = true; //send cookies from our API 
  
  return (
    <UserContextProvider> {/* Wrapping Register Component provides it access to context values defined in UserContextProvider */}
      <Routes/>
    </UserContextProvider>
  )
}

export default App
