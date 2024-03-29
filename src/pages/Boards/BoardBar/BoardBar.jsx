// import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

function BoardBar() {
  const theme = useTheme()
  return (
    <Box sx={{
      minHeight: '749px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
      justifyContent: 'center',
      backgroundImage: 'url(\'/src/assets/discorver.svg\')',
      backgroundSize: '100% 100%',
      [theme.breakpoints.down('sm')]: {
        minHeight: 'auto'
      }
      // imageRendering: 'auto'
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
          cursor: 'pointer',
          [theme.breakpoints.down('sm')]: {
            m: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            boxShadow: 'unset',
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'unset'
            },
            borderRadius: 'unset'
          }
        }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
            sx={{
              color: 'div.main',
              fontSize: '16px',
              fontWeight: '600',
              m: '0 0 20px 0',
              [theme.breakpoints.down('sm')]: {
                color: 'white'
              }
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
              lineHeight: '65px',
              [theme.breakpoints.down('sm')]: {
                color: 'white'
              }
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
              color: 'div.main',
              lineHeight: '39px',
              fontWeight: 'medium',
              [theme.breakpoints.down('sm')]: {
                color: 'white'
              }
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
              },
              [theme.breakpoints.down('sm')]: {
                m: '15px -10px 0 10px',
                bgcolor: 'white',
                color: 'title.main'
              }
            }}
          >BUY NOW</Button>
        </CardContent>
      </Card>
    </Box>
  )
}

export default BoardBar
