import "./App.css";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./components/UserContextProvider";
import Routing from "./Routing";
import BaseLayout from "./components/Layout/index";


function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <BaseLayout>
          <Routing />
        </BaseLayout>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
