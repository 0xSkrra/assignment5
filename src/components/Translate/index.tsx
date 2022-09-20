import { Button, Grid, ImageList, ImageListItem, TextField } from "@mui/material"
import { FormEvent, ReactNode, useContext, useState } from "react"
import { isLetter } from "../../common/util"
import { addTranslationById } from "../../common/util/API"
import { UserContext } from "../UserContextProvider"

const Translate = () => {
  const userContext = useContext(UserContext)
  const user = userContext.getUser()
  const [phrase, setPhrase] = useState("")
  const [content, setContent] = useState<NonNullable<ReactNode>>(<></>)
  const [showResultTitle, setShowResultTitle] = useState<Boolean>(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (phrase.length < 1) {
      setShowResultTitle(false)
      setContent(<></>)
      return
  }
    const newContent = [...phrase].map((x) => {
      return isLetter(x) ? (
        // append Math.random so each child prop key is unique | kinda whacky solution?
        <ImageListItem key={x+Math.random()}>
          <img src={`/img/all/${x.toLowerCase()}.png?w=64&h=64&fit=crop&auto=format`}
           srcSet={`/img/all/${x.toLowerCase()}.png?w=64&h=64&fit=crop&auto=format`} 
           alt="" 
           />
           </ImageListItem>
      ) : (
        <></>
      )
    })
    addTranslationById(user.id, phrase)
    setContent(newContent)
    setShowResultTitle(true)
  }
  return (
    <Grid item xs={3} alignItems="center"
    justifyContent="center">
      <form onSubmit={onSubmit}>
        <Grid item>
          <TextField 
          onChange={(e) => setPhrase(e.target.value)} 
          type="text"
          label="Enter phrase to translate"
          sx={{width: '100%'}}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ mt: 1 }} type="submit">Submit</Button>
        </Grid>
      </form>
      { showResultTitle ? <h4>Translation Result</h4> : <></>}
      <ImageList sx={{ width: 500, height: 250 }} cols={8} rowHeight={50}>
        {content}
      </ImageList>
    </Grid>
  )
}

export default Translate
