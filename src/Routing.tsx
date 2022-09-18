import { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "./components/Login"
import Profile from "./components/Profile"
import Translate from "./components/Translate"
import { UserContext } from "./components/UserContextProvider"

const Routing = () => {
  const userContext = useContext(UserContext)
  const authentication = userContext.isAuthenticated()
  return (
    <Routes>
      <Route
        path="login"
        element={
          authentication ? <Navigate replace to="/translate" /> : <LoginPage />
        }
      />
      {authentication && <Route path="translate" element={<Translate />} />}
      {authentication && <Route path="profile" element={<Profile />} />}
      <Route
        path="*"
        element={
          <Navigate replace to={authentication ? "/profile" : "/login"} />
        }
      />
    </Routes>
  )
}

export default Routing
