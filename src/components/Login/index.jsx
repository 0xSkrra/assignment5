import { useState } from "react"

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const onChange = (ev) => {
    setUsername(ev.target.value)
  }
  return (
    <div>
        <label htmlFor="usernameInput">Login</label>
        <input onChange={onChange} value={username} id="usernameInput" type="text"/>
    </div>
  )
}

export default LoginPage