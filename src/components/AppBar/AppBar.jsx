
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Home from './Menus/Home'
import Services from './Menus/Services'
import Doctors from './Menus/Doctors'
import Products from './Menus/Products'
import Gallery from './Menus/Gallery'

function AppBar() {
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
            <Typography variant='span' sx={{ fontSize: '34px', fontWeight: 'bold', color: 'title.main', cursor: 'pointer' }}>
              Furniture
            </Typography>
          </Box>
        </Box>
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
    </div>
  )
}

export default AppBar
