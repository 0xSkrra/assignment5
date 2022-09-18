import './App.css';
import { BrowserRouter,   Routes,   Route, } from "react-router-dom";
import LoginPage from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path="login" element={<LoginPage/>}/>
      <Route path="translate" element={<></>}/>
      <Route path="profile" element={<></>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
