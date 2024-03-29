// import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


function BoardBar() {

  return (
    <Box sx={{
      width: '100%',
      height: '749px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
      justifyContent: 'center',
      backgroundImage: 'url(\'/src/assets/Maskgroup.jpg\')',
      backgroundSize: '100% 100%'
    }}>
      <Card
        sx={{
          maxWidth: '643px',
          maxHeigh: '443px',
          bgcolor:'#DFE9F4',
          borderRadius: '10px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)',
          m: '0 90px 0 0',
          padding: '39px',
          transition: 'transform 0.5s ease',
          '&:hover': {
            transform: 'translateY(-5px)'
          },
          cursor: 'pointer'
        }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
            sx={{
              color: 'div.main',
              fontSize: '16px',
              fontWeight: '600',
              m: '0 0 20px 0'
            }}
          >
            <div style={{
              textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
              letterSpacing: '2px'
            }}> New Arrival </div>
          </Typography>
          <Typography gutterBottom variant="h1" component="div"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              color: 'title.main',
              fontSize: '52px',
              fontWeight: 'bold',
              maxWidth: '488px',
              lineHeight: '65px'
            }}
          >
            Discover Our New Collectio
            {/* <span>Discover Our</span>
            <span>New Collection</span> */}
          </Typography>
          <Typography gutterBottom variant="h5" component="div"
            sx={{
              fontSize: '18px',
              maxWidth: '546px',
              minWidth: '546px',
              color: 'div.main',
              lineHeight: '39px',
              fontWeight: 'medium'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </Typography>
          <Button
            // variant="contained"
            sx={{
              maxWidth: '229px',
              maxHeight:'70px',
              borderRadius: '50px',
              bgcolor: 'title.main',
              fontWeight: 'bold',
              fontSize: '16px',
              padding: '25px 72px',
              mt: '30px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
              '&:hover.MuiButton-root' :{
                bgcolor: '#40739e'
              }
            }}
          >BUY NOW</Button>
        </CardContent>
      </Card>
    </Box>
  )
}

export default BoardBar
