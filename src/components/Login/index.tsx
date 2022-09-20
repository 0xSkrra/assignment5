import { Grid, TextField } from "@mui/material"
import Button from "@mui/material/Button"
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
    <Grid item xs={3} alignItems="center"
    justifyContent="center">
    <form onSubmit={handleLogin}>
    <Grid item>
      <TextField
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        label="Enter username"
        id="usernameInput"
        type="text"
        required
      />
      </Grid>
      <Grid item alignItems="center"
  justifyContent="center"><Button sx={{ mt: 1 }} variant="contained" type="submit">Login</Button></Grid>
    </form>
    </Grid>
  )
}

export default LoginPage
