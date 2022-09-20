import { useEffect, useState } from "react"
import { UserContext } from "../UserContextProvider"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { getOrCreateUserByUserName, getTranslationsByUserId } from "../../common/util/API"
import { render } from "react-dom"



function Profile() {
  const userContext = useContext(UserContext)
  const user = userContext.getUser()
  const [userTranslations, setUserTranslations] = useState<React.ReactNode | null>(<></>)  //? var user1 = getOrCreateUserByUserName(user.username)
  const navigate = useNavigate()
  
  
  useEffect(() => {
    getTranslationsByUserId(user.id)
    .then(
      result => setUserTranslations(result.map((x) => <li>{x}</li>))
    )
  }, [user.id])
  
  function handleLogout() {
    console.log("Logging out")
    //Logging out and setting users authentication to false
    userContext.removeUser()
    //navigating to login page
    navigate("/login")
    }
  
  //Going to translate page
  function handleToSign() {
  console.log("Going to translate page")
  //navigating to login page
  navigate("/translate")
  }

  return (
    <div id= "user-component">
        <h2 id="Title">User Data:</h2>
        {user.username ? <p>{user.username}</p> : <p>No user logged in</p>}
        <button id = "logoutBut" onClick={handleLogout}>Sign out</button>
        <button id = "toSignBut" onClick={handleToSign}>Translate page</button>
        <p id = "translation-list">Translations:</p>
        <ul>
          {userTranslations}
        </ul>
        
    </div>
)


}


export default Profile
