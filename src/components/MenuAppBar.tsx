import { Box, FormGroup, FormControlLabel, Switch, AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import { useState, ChangeEvent, MouseEvent, useContext, useEffect } from "react";
import { UserContext } from "./UserContextProvider";
import { useNavigate } from "react-router-dom"


export default function MenuAppBar() {
  const userContext = useContext(UserContext)
  const user = userContext.getUser()
  const [auth, setAuth] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()
  
  useEffect(() => {
    setAuth(user.isAuthenticated)
  }, [user])
  
  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography onClick={() => navigate('/translate')} variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Lost in Translation
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}