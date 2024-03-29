import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { dataBrowse, dataWorks } from '~/api/mock-data'
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
    }
  }

  function ApiBrowse () {
    return (
      <Box
        container wrap="nowrap"
        sx={{
          mt: '54px',
          p: '0 128px 60px 129px',
          display:'flex',
          justifyContent:'space-around',
          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            p: '0 0 60px 0'
          }
        }}>
        {dataBrowse?.map((item) => (
          <Box key={item._id}
            sx={{
              m: '0 10px',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              },
              cursor: 'pointer',
              [theme.breakpoints.down('sm')]: {
                m: '35px auto'
              }
            }}>
            <img
              style={{ width: 381, height: 480 }}
              alt={item?.title}
              src={item?.images}
            />
            <Box
              sx={{
                textAlign:'center',
                color: 'div.main',
                fontSize: '24px',
                fontWeight: 600,
                mt: '30px'
              }}>{item?.title}</Box>
          </Box>
        ))}
      </Box>
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
            justifyContent: 'space-between',
            alignItems: 'center',
            p: '46px 120px',
            [theme.breakpoints.down('sm')]: {
              p: '46px 20px'
            }
          }}>
          <Grid item sx={BOARD_STYLES}>
            <CardMedia
              component="img"
              image="/src/assets/Groupcar.svg"
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
          <Grid item sx={BOARD_STYLES}>
            <CardMedia
              component="img"
              image="/src/assets/Groupsupport.svg"
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
          <Grid item sx={BOARD_STYLES}>
            <CardMedia
              component="img"
              image="/src/assets/authentic.svg"
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
      {/* Browse The Range */}
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
        <Box
          sx={{
            mt: '54px',
            p: '0 128px 60px 129px',
            display:'flex',
            justifyContent:'space-around',
            [theme.breakpoints.down('sm')]: {
              display: 'flex',
              flexDirection: 'column',
              p: '0 0 60px 0'

            }
            // flexWrap: 'wrap'
          }}>
          <Box
            sx={{
              m: '45px 20px 0 10px',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              },
              cursor: 'pointer',
              [theme.breakpoints.down('sm')]: {
                m: '15px auto'
              }
            }}>
            <img
              style={{ width: 355, height: 434 }}
              // alt={item?.title}
              src="/src/assets/GroupCollection_1.jpg"
            />
          </Box>
          <Box
            sx={{
              m: '0 20px',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              },
              cursor: 'pointer',
              [theme.breakpoints.down('sm')]: {
                m: '15px auto'
              }
            }}>
            <img
              style={{ width: 355, height: 434 }}
              // alt={item?.title}
              src="/src/assets/GroupCollection_2.jpg"
            />
          </Box>
          <Box
            sx={{
              m: '45px 10px 0 20px',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              },
              cursor: 'pointer',
              [theme.breakpoints.down('sm')]: {
                m: '15px auto'
              }
            }}>
            <img
              style={{ width: 355, height: 434 }}
              // alt={item?.title}
              src="/src/assets/GroupCollection_3.jpg"
            />
          </Box>
        </Box>
        {/* end images */}
      </Box>
      {/* end Browse The Range */}
      {/* Beautify Your Space */}
      <Box
        sx={{
          minHeight: '874px',
          bgcolor: 'primary.main'
        }}>
        <Box sx={{
          width: '100%',
          // minHeight: '749px',
          display: 'flex',
          // flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: '0 160px',
          [theme.breakpoints.down('sm')]: {
            p: '15px auto',
            display: 'flex',
            flexDirection: 'column'
          }
        }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"
              sx={{
                color: 'div.main',
                fontSize: '32px',
                fontWeight: 'bold',
                m: '0 0 20px 0'
              }}
            >
              <div style={{
                textShadow: '0px 2px 4px rgba(0, 0, 0, 2)'
                // letterSpacing: '1px'
              }}> Beautify Your Space </div>
            </Typography>
            <Typography gutterBottom variant="h5" component="div"
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
              // variant="contained"
              sx={{
                maxWidth: '229px',
                maxHeight:'70px',
                borderRadius: '50px',
                bgcolor: 'title.main',
                fontWeight: 'bold',
                fontSize: '16px',
                padding: '25px 57px',
                mt: '30px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
                '&:hover.MuiButton-root' :{
                  bgcolor: '#40739e'
                }
              }}
            >Learn More</Button>
          </CardContent>
          <CardContent sx={{ position: 'relative', mt: '60px' }}>
            <CardMedia
              component="img"
              image="/src/assets/beautify_1.svg"
              alt="Ship"
              sx={{
                // position: 'absolute',
                position: 'relative',
                zIndex: 1,
                maxWidth: '500px',
                minWidth: '300px',
                maxHeight: '754px',
                objectFit: 'contain'
              }}/>
            <CardMedia
              component="img"
              image="/src/assets/sbeautify_2.svg"
              alt="Ship"
              sx={{
                top: '20%',
                right: -60,
                position: 'absolute',
                maxWidth: '372px',
                objectFit: 'contain',
                [theme.breakpoints.down('sm')]: {
                  maxWidth: '272px',
                  right: -10
                }
              }}/>
          </CardContent>
        </Box>
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
        <Box
          container wrap="nowrap"
          sx={{
            mt: '54px',
            p: '0 128px 60px 128px',
            display:'flex',
            justifyContent:'center',
            [theme.breakpoints.down('sm')]: {
              display: 'flex',
              flexDirection: 'column',
              p: '0 0 60px 0'
            }
          }}>
          {dataWorks?.map((item) => (
            <Box key={item._id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                m: '0 10px',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                },
                cursor: 'pointer',
                [theme.breakpoints.down('sm')]: {
                  m: '55px auto'
                }
              }}>
              <img
                style={{ minWidth: 381, minHeight: 400 }}
                alt={item?.title}
                src={item?.images}
              />
              <Box sx={{
                position: 'absolute',
                minWidth:90,
                minHeight: 90,
                mt: 44,
                bgcolor: 'white',
                borderRadius: '50%',
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center'
              }}>
                <Box
                  sx={{
                    width:60,
                    height: 60,
                    bgcolor: 'black',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent:'center',
                    alignItems: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>{item?._id}.</Box>
              </Box>
              <Box
                sx={{
                  textAlign:'center',
                  color: 'div.main',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  mt: '75px'
                }}>
                {item?.title}
              </Box>
              <Box sx={{
                textAlign:'center',
                color: 'p.main',
                fontSize: '18px',
                mt: '10px',
                lineHeight: '28px',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '16px'
                }
              }}>
                {item?.description}
              </Box>
            </Box>
          ))}
        </Box>
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
