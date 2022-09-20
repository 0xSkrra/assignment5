import { FormEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getOrCreateUserByUserName } from "../../common/util/API"
import { UserContext } from "../UserContextProvider"

const LoginPage = () => {
  const [username, setUsername] = useState<string>("")
  const navigate = useNavigate()
  const userContext = useContext(UserContext)
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let id = await getOrCreateUserByUserName(username)
    userContext.setUser(id, username)
    navigate("/translate")
  }
  return (
    <form id= "login-component" onSubmit={handleLogin}>
      <label htmlFor="usernameInput">Login with username</label>
      <input
        minLength={2}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        id="usernameInput"
        type="text"
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginPage
