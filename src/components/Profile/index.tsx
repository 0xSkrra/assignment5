import { useEffect, useState } from "react"
import { UserContext } from "../UserContextProvider"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Button, Card } from "@mui/material"
import { blueGrey } from "@mui/material/colors"
import { deleteTranslationsById, getTranslationsByUserId } from "../../common/util/API"



function Profile() {
  const userContext = useContext(UserContext)
  const user = userContext.getUser()
  const [userTranslations, setUserTranslations] = useState<React.ReactNode | null>(<></>)  //? var user1 = getOrCreateUserByUserName(user.username)
  const navigate = useNavigate()
  
  //gets last ten translations in list and return it to list
  useEffect(() => {
    getTranslationsByUserId(user.id)
    .then(
      result => setUserTranslations(result.slice(-10).map((x) => <li>{x}</li>))
    )
  }, [user.id])

  //function to clear translation history
  function handleClear() {
    console.log("Clearing user translation history")
    setUserTranslations([])
    deleteTranslationsById(user.id)
    }


  //list of translations as card 
  const transCard =   
  <div>
    <Button variant="contained" id = "toClearHistory" onClick={handleClear}>Clear History</Button>
    <h3 id = "translation-list">Translations:</h3>
    <ul>{userTranslations} </ul>
  </div>

  //user component with user translations as card 
  const userCard =     
  <div id= "user-component">
  <h2 id="Title">User:</h2>
  {user.username ? <h3>{user.username}</h3> : <p>No user logged in</p>}
  <Box id= "translationCard" sx={{ backgroundcolour: blueGrey, display: 'inline-block', mx: '5px', transform: 'scale(1)' }}>
    <Card variant="outlined" >{transCard}</Card>
    </Box>
  </div>

  return (
    <Box sx={{ minWidth: 300 }}>
    <Card variant="outlined" >{userCard}</Card>
    </Box>
  )
}


export default Profile
