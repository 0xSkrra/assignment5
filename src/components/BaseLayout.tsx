import { Grid} from "@mui/material"
import MenuAppBar from "./MenuAppBar"

interface baseLayoutProps {
    // set children to be react element or multiple react elements
    children: React.ReactNode | React.ReactNode[]
  }

const BaseLayout = ({children}: baseLayoutProps) => {
  return (
    <div>
      <MenuAppBar/>
      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>
   {children}  
   </Grid>
   </div>
  )
}

export default BaseLayout