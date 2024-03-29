
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Home from './Menus/Home'
import Services from './Menus/Services'
import Doctors from './Menus/Doctors'
import Products from './Menus/Products'
import Gallery from './Menus/Gallery'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import { useState } from 'react'

function AppBar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <Box px={2} sx={{
        // backgroundColor: 'primary.light' ,
        width: '100%',
        height: '122px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 120px'

      }}>
        <Box sx={{ display: 'flex', alignItems:' center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems:' center', gap: 0.5 }}>
            <MenuIcon onClick={handleClick} sx={{ display: { xs : 'block', sm: 'none' }, color: 'title.main', fontSize: '34px', fontWeight: 'bold', mr: '30px', ml: '-90px' }}/>
            <Typography variant='span' sx={{ fontSize: '34px', fontWeight: 'bold', color: 'title.main', cursor: 'pointer' }}>
              Furniture
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems:' center',
              gap: '70px',
              color: 'div.main',
              fontWeight: '600'
            }}>
            <Home/>
            <Services/>
            <Doctors/>
            <Products/>
            <Gallery/>
          </Box>
        </Box>
      </Box>

      {/* menu */}
      <Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <Box sx={{ minWidth: '300px' }}>
            <MenuItem>
              <Home/>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Services/>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Doctors/>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Products/>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Gallery/>
            </MenuItem>
          </Box>
        </Menu>
      </Box>
    </div>
  )
}

export default AppBar
