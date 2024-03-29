import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { dataFooter } from '~/api/mock-data'
import { useTheme } from '@mui/material/styles'

function Footer() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        minHeight: '386px',
        bgcolor:'#03344F',
        p: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          flexDirection: 'column'
        }
      }}>
      <Box sx={{ mt:'39px',
        [theme.breakpoints.down('sm')]: {
          p: '0 20px'
        } }}>
        <Typography gutterBottom variant="h5" component="div"
          sx={{
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            m: '0 0 34px 0'
          }}
        >
          <div> Beauty Care </div>
        </Typography>
        <Typography gutterBottom variant="p" component="div"
          sx={{
            fontSize: '16px',
            maxWidth: '400px',
            minWidth: '300px',
            minHeight: '97px',
            color: 'white',
            lineHeight: '35px',
            fontWeight: 400
          }}
        >
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </Typography>
        <Typography gutterBottom variant="h5" component="div"
          sx={{
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            mt: '21px'
          }}
        >
          <div> Follow Us </div>
        </Typography>
      </Box>
      <Box sx={{ mt: '57px' }}>
        <Typography gutterBottom variant="h5" component="div"
          sx={{
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            mb : '16px',
            [theme.breakpoints.down('sm')]: {
              textAlign: 'center'
            }
          }}
        >
          <div> Instagram Shop </div>
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {dataFooter?.map((item) => (
            <Box key={item._id}
              sx={{
                m: '0 10px',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                },
                cursor: 'pointer',
                [theme.breakpoints.down('sm')]: {
                  m: '15px auto',
                  '&:hover': {
                    transform: 'unset'
                  }
                }
              }}>
              <img
                style={{ width: '175px', height: '185px' }}
                alt={item?.title}
                src={item?.images}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
