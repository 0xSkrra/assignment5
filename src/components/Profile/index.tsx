import { useState } from "react"
import { UserContext } from "../UserContextProvider"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { getTranslationsByUserId } from "../../common/util/API"



function Profile() {
  const userContext = useContext(UserContext)
  const user = userContext.getUser()
  const navigate = useNavigate()
  const listOfTranslations = getTranslationsByUserId(user.id)


  function handleLogout() {
    console.log("Logging out")
    //Logging out and setting users authentication to false
    user.isAuthenticated = false
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
    <>
        <p>User Data:</p>
        {user.username ? <p>{user.username}</p> : <p>No user logged in</p>}
        <button id = "logoutBut" onClick={handleLogout}>Sign out</button>
        <button id = "toSignBut" onClick={handleToSign}>Translate page</button>
        <p id = "translation-list">Translations:</p>
        <ul></ul>
        
    </>
)


}


export default Profile
