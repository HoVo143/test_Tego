import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { dataBrowse, dataWorks } from '../../../api/mock-data.js'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import { useTheme } from '@mui/material/styles'

function BoardContent() {
  const theme = useTheme()

  const BOARD_STYLES = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'div.main',
    minWidth: '340px',
    '&.MuiGrid-item': {
      paddingTop: 'unset'
    },
    [theme.breakpoints.down('sm')]: {
      mt: '25px'
    }
  }

  function ApiBrowse () {
    return (
      <Grid container spacing={2} sx={{ mt: '54px', p: '0 128px 60px 129px',
        [theme.breakpoints.down('sm')]: {
          p: '0 0 60px 0'
        } }}>
        {dataBrowse?.map((item) => (
          <Grid item key={item._id} xs={12} sm={6} md={4}>
            <Box
              sx={{
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                },
                cursor: 'pointer',
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                  mt: '55px'
                }
              }}
            >
              <img
                style={{ minWidth: '381px', minHeight: '480px' }}
                alt={item?.title}
                src={item?.images}
              />
              <Typography variant="h6" sx={{ mt: '30px' }}>{item?.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    )
  }

  return (
    <Box>
      <Box
        sx={{
          flexGrow: 1,
          minHeight: '150px',
          bgcolor: 'primary.main'
        }}>
        <Grid container spacing={2}
          sx={{
            display:'flex',
            // justifyContent: 'space-between',
            alignItems: 'center',
            p: '46px 120px',
            [theme.breakpoints.down('sm')]: {
              p: '46px 20px'
            }
          }}>
          <Grid xs={12} sm={6} md={4} sx={BOARD_STYLES}>
            <CardMedia
              component="img"
              // image="./src/assets/Groupcar.svg"
              image="data:image/jpeg;base64,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"
              alt="Ship"
              sx={{
                width: '70.64px',
                height: '50px',
                objectFit: 'contain',
                mr: '27px'
              }}/>
            <Box>
              <Box sx={{ fontSize: '24px', fontWeight: '600' }}>Free Delivery</Box>
              <Box sx={{ fontSize: '16px' }}>Lorem ipsum dolor sit amet.</Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={4} sx={BOARD_STYLES}>
            <CardMedia
              component="img"
              image="./src/assets/Groupsupport.svg"
              alt="Support"
              sx={{
                width: '59.95px',
                height: '49.34px',
                objectFit: 'contain',
                mr: '27px'
              }}/>
            <Box>
              <Box sx={{ fontSize: '24px', fontWeight: '600' }}>Support 24/7</Box>
              <Box sx={{ fontSize: '16px' }}>Lorem ipsum dolor sit amet.</Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={4} sx={BOARD_STYLES}>
            <CardMedia
              component="img"
              image="./src/assets/authentic.svg"
              alt="Authentic"
              sx={{
                width: '55px',
                height: '55px',
                objectFit: 'contain',
                mr: '27px'
              }}/>
            <Box>
              <Box sx={{ fontSize: '24px', fontWeight: '600' }}>100% Authentic</Box>
              <Box sx={{ fontSize: '16px' }}>Lorem ipsum dolor sit amet.</Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Inspiration Collection */}
      <Box>
        <Typography gutterBottom variant="h1" component="div"
          sx={{
            mt:'60px',
            textAlign:'center',
            color: 'div.main',
            fontWeight: 'bold',
            fontSize: '32px'
          }}
        >
          Inspiration Collection
        </Typography>
        <Typography gutterBottom variant="p" component="div"
          sx={{
            textAlign:'center',
            color: 'p.main',
            fontSize: '20px'
          }}
        >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        {/* images */}
        <Grid container spacing={2} sx={{ mt: '55px', p: '0 128px 60px 129px',
          [theme.breakpoints.down('sm')]: {
            p: '0 0 60px 0'
          } }}>
          <Grid item xs={12} sm={6} md={4} sx={{ mt: '55px' }}>
            <Box
              sx={{
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                },
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              <img
                style={{ width: '355px', height: '434px' }}
                src="./src/assets/GroupCollection_1.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                },
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              <img
                style={{ width: '355px', height: '434px' }}
                src="/src/assets/GroupCollection_2.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ mt: '55px',
            [theme.breakpoints.down('sm')]: {
              mt: '2px'
            } }}>
            <Box
              sx={{
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                },
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              <img
                style={{ width: '355px', height: '434px' }}
                src="/src/assets/GroupCollection_3.jpg"
              />
            </Box>
          </Grid>
        </Grid>
        {/* end images */}
      </Box>
      {/* end Inspiration Collection */}
      {/* Beautify Your Space */}
      <Box
        sx={{
          minHeight: '874px',
          bgcolor: 'primary.main'
        }}>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: '0 160px',
            [theme.breakpoints.down('sm')]: {
              p: '15px 10px'
            }
          }}
        >
          <Grid item xs={12} sm={6}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  color: 'div.main',
                  fontSize: '32px',
                  fontWeight: 'bold',
                  m: '0 0 20px 0',
                  textShadow: '0px 2px 4px rgba(0, 0, 0, 2)'
                }}
              >
                Beautify Your Space
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: '20px',
                  maxWidth: '514px',
                  minWidth: '340px',
                  minHeight: '122.56px',
                  color: 'p.main',
                  lineHeight: '39px'
                }}
              >
                Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </Typography>
              <Button
                sx={{
                  maxWidth: '229px',
                  maxHeight: '70px',
                  borderRadius: '50px',
                  bgcolor: 'title.main',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  padding: '25px 57px',
                  mt: '30px',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    bgcolor: '#40739e'
                  }
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardContent
              sx={{
                position: 'relative',
                mt: '60px',
                [theme.breakpoints.down('sm')]: {
                  // maxWidth: '320px'
                  display: 'flex',
                  justifyContent: 'center'
                }
              }}
            >
              <CardMedia
                component="img"
                image="/src/assets/beautify_1.svg"
                alt="Ship"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  maxWidth: '500px',
                  maxHeight: '754px',
                  objectFit: 'contain',
                  [theme.breakpoints.down('sm')]: {
                    maxWidth: '290px'
                  }
                }}
              />
              <CardMedia
                component="img"
                image="/src/assets/sbeautify_2.svg"
                alt="Ship"
                sx={{
                  top: '20%',
                  right: '1%',
                  position: 'absolute',
                  maxWidth: '372px',
                  objectFit: 'contain',
                  [theme.breakpoints.down('sm')]: {
                    maxWidth: '300px',
                    top: '18%',
                    right: 25
                  }
                }}
              />
            </CardContent>
          </Grid>
        </Grid>
      </Box>

      {/* end Beautify Your Space */}
      {/* Browse The Range */}
      <Box sx={{
        mt: '60px',
        borderBottom: '1px solid #D7D6D6'
      }}>
        <Typography gutterBottom variant="h1" component="div"
          sx={{
            // marginTop:'55px',
            textAlign:'center',
            color: 'div.main',
            fontWeight: 'bold',
            fontSize: '32px'
          }}
        >
            Browse The Range
        </Typography>
        <Typography gutterBottom variant="p" component="div"
          sx={{
            textAlign:'center',
            color: 'p.main',
            fontSize: '20px'
          }}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        {/* images */}
        <ApiBrowse/>
        {/* end images */}
      </Box>
      {/* end Browse The Range */}
      {/* How It Works */}
      <Box>
        <Typography gutterBottom variant="h1" component="div"
          sx={{
            mt:'60px',
            textAlign:'center',
            color: 'div.main',
            fontWeight: 'bold',
            fontSize: '32px'
          }}
        >
            How It Works
        </Typography>
        <Typography gutterBottom variant="p" component="div"
          sx={{
            textAlign:'center',
            color: 'p.main',
            fontSize: '20px'
          }}
        >
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        {/* images */}
        <Grid container spacing={2} sx={{ mt: '54px', p: '0 128px 60px 129px', justifyContent: 'center' }}>
          {dataWorks?.map((item) => (
            <Grid item key={item._id} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  },
                  cursor: 'pointer',
                  textAlign: 'center',
                  mb: '65px'
                }}
              >
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                  <img
                    style={{ minWidth: 381, minHeight: 400 }}
                    alt={item?.title}
                    src={item?.images}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      minWidth: 90,
                      minHeight: 90,
                      bottom: '-12%',
                      bgcolor: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        bgcolor: 'black',
                        color: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '24px',
                        fontWeight: 'bold'
                      }}
                    >
                      {item?._id}.
                    </Box>
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ mt: '75px', fontWeight: 'bold' }}>{item?.title}</Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'p.main',
                    mt: '10px',
                    lineHeight: '28px',
                    fontSize: '18px',
                    minWidth: 381,
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '16px'
                      // width: 381
                    }
                  }}>{item?.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* end How It Works */}
      {/* Join Our Mailing List */}
      <Box
        sx={{
          minHeight: '363px',
          bgcolor: 'primary.main',
          mt :'95px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Box sx={{ m : '71px 0 49px 0' }}>
          <Typography gutterBottom variant="h1" component="div"
            sx={{
              mt:'60px',
              textAlign:'center',
              color: 'div.main',
              fontWeight: 'bold',
              fontSize: '32px'
            }}
          >
           Join Our Mailing List
          </Typography>
          <Typography gutterBottom variant="p" component="div"
            sx={{
              color: 'p.main',
              fontSize: '20px',
              maxWidth: '514px',
              lineHeight: '39px',
              textAlign: 'center',
              [theme.breakpoints.down('sm')]: {
                maxWidth: '340px',
                m : '5px auto'
              }
            }}
          >
           Sign up to receive inspiration, product updates, and special offers from our team.
          </Typography>
          <Paper
            component="form"
            sx={{
              mt: '50px',
              display: 'flex',
              alignItems: 'center',
              width: '486px',
              border: '1px solid #054C73',
              '&.MuiPaper-elevation': {
                boxShadow: 'none'
              },
              [theme.breakpoints.down('sm')]: {
                width: '320px',
                m : '15px auto'
              }
            }}
          >
            <InputBase
              sx={{
                ml: '25px',
                flex: 1,
                height: '70px',
                '& .MuiInputBase-input':{
                  fontSize: '16px',
                  textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
                  fontWeight: 400
                }
              }}
              placeholder="example@gmail.com"
            />
            <Button
              sx={{
                width: '153px',
                height: '70px',
                bgcolor: 'title.main',
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover.MuiButton-root' :{
                  bgcolor: '#40739e'
                },
                [theme.breakpoints.down('sm')]: {
                  width: '100px'
                }
              }}>Submit</Button>
          </Paper>
        </Box>
      </Box>
      {/* end Join Our Mailing List */}
    </Box>
  )
}

export default BoardContent
