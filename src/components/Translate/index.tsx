import { FormEvent, useContext, useState } from "react"
import { isLetter } from "../../common/util"
import { addTranslationById } from "../../common/util/API"
import { UserContext } from "../UserContextProvider"

const Translate = () => {
  const userContext = useContext(UserContext)
  const user = userContext.getUser()
  const [phrase, setPhrase] = useState("")
  const [content, setContent] = useState<React.ReactNode | null>(<></>)
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (phrase.length < 1) return
    const newContent = [...phrase].map((x) => {
      return isLetter(x) ? (
        <img src={`/img/all/${x.toLowerCase()}.png`} alt="" />
      ) : (
        <></>
      )
    })
    addTranslationById(user.id, phrase)
    setContent(newContent)
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setPhrase(e.target.value)} type="text" />
        <button type="submit">Submit</button>
      </form>
      <div>{content}</div>
      <div>
        <p>Last Translations</p>
      </div>
    </>
  )
}

export default Translate
