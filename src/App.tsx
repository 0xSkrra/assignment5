import "./App.css";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./components/UserContextProvider";

import Routing from "./Routing";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
