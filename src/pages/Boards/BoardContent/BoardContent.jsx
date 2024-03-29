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
                  mt: '55px',
                  '&:hover': {
                    transform: 'unset'
                  }
                }
              }}
            >
              <img
                style={{ width: '381px', height: '480px', objectFit: 'cover' }}
                alt={item?.title}
                src={item?.images}
              />
              <Typography variant="h6" sx={{ mt: '30px', color: 'div.main', fontSize: '24px', fontWeight: '600' }}>{item?.title}</Typography>
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
              image="/static/images/Groupcar.svg"
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
              image="/static/images/Groupsupport.svg"
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
              image="/static/images/authentic.svg"
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
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                  '&:hover': {
                    transform: 'unset'
                  }
                }
              }}
            >
              <img
                style={{ width: '355px', height: '434px' }}
                src="/static/images/GroupCollection_1.jpg"
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
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                  '&:hover': {
                    transform: 'unset'
                  }
                }
              }}
            >
              <img
                style={{ width: '355px', height: '434px' }}
                src="/static/images/GroupCollection_2.jpg"
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
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                  '&:hover': {
                    transform: 'unset'
                  }
                }
              }}
            >
              <img
                style={{ width: '355px', height: '434px'}}
                src="/static/images/GroupCollection_3.jpg"
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
            justifyContent: 'center',
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
                  },
                  [theme.breakpoints.down('sm')]: {
                    maxWidth: '180px',
                    padding: '20px 32px',
                    maxHeight:'60px'
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
                minWidth: '650px',
                maxWidth: '650px',
                display: 'flex',
                justifyContent: 'center',
                [theme.breakpoints.down('sm')]: {
                  minWidth: '150px',
                  // maxWidth: '150px',
                  display: 'flex',
                  justifyContent: 'center'
                }
              }}
            >
              <CardMedia
                component="img"
                image="/static/images/beautify_1.svg"
                alt="Ship"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  width: '500px',
                  height: '754px',
                  objectFit: 'cover',
                  [theme.breakpoints.down('sm')]: {
                    width: '250px',
                    height: '350px'
                  }
                }}
              />
              <CardMedia
                component="img"
                image="/static/images/sbeautify_2.svg"
                alt="Ship"
                sx={{
                  top: '20%',
                  right: 0,
                  position: 'absolute',
                  width: '372px',
                  objectFit: 'contain',
                  [theme.breakpoints.down('sm')]: {
                    width: '200px',
                    top: '23%',
                    right: '15px'
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
            fontSize: '20px',
            fontWeight: '400'
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
                  mb: '65px',
                  [theme.breakpoints.down('sm')]: {
                    '&:hover': {
                      transform: 'unset'
                    }
                  }
                }}
              >
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                  <img
                    style={{ width: '381px', height: '400px', objectFit: 'cover' }}
                    alt={item?.title}
                    src={item?.images}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      minWidth: 90,
                      minHeight: 90,
                      bottom: '-11%',
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
                <Typography variant="h6"
                  sx={{
                    mt: '75px',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    minWidth: '300px',
                    color: 'div.main'
                  }}>{item?.title}</Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'p.main',
                    mt: '10px',
                    lineHeight: '28px',
                    fontSize: '18px',
                    minWidth: 381,
                    fontWeight: 400,
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
          mt :'75px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          [theme.breakpoints.down('sm')]: {
            mt :'0'
          }
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
