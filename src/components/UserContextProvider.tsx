import React, { createContext, useState } from "react"
import { defaultUser, User } from "../common/interface/user"
import { UserContextInterface } from "../common/interface/userContextInterface"

interface ContextApiProps {
  // set children to be react element or multiple react elements
  children: React.ReactNode | React.ReactNode[]
}
const getInitialUser = (): User => {
  const fetchedUser = localStorage.getItem("user")
  if (fetchedUser === null) return defaultUser
  const serializedUser: User = JSON.parse(fetchedUser)
  return serializedUser
}

const UserContextProvider = ({ children }: ContextApiProps) => {
  const [contextUser, setContextUser] = useState(getInitialUser)

  const setUser = (id: number, username: string) => {
    const newUser: User = { id: id, username: username, isAuthenticated: true }
    setContextUser(newUser)
    const serializedUser = JSON.stringify(newUser)
    localStorage.setItem("user", serializedUser)
  }

  const getUser = (): User => contextUser

  const removeUser = () => {
    setContextUser(defaultUser)
    localStorage.removeItem("user")
  }

  const isAuthenticated = (): boolean => {
    //make sure user can't be authenticated if id field is missing
    if(contextUser.isAuthenticated && isNaN(contextUser.id)) removeUser()
    return contextUser.isAuthenticated
  }

  return (
    <UserContext.Provider
      value={{ setUser, getUser, removeUser, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const UserContext = createContext({} as UserContextInterface)

export default UserContextProvider
