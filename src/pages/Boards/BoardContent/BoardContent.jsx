import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import { dataBrowse, dataWorks } from '~/api/mock-data'

function BoardContent() {

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
          justifyContent:'space-around'
        }}>
        {dataBrowse?.map((item) => (
          <Box key={item._id}
            sx={{
              m: '0 10px',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              },
              cursor: 'pointer'
            }}>
            <img
              style={{ minWidth: 381, minHeight: 480 }}
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
        <Grid container spacing={2} sx={{ display:'flex', justifyContent: 'space-between', alignItems: 'center', p: '46px 120px' }}>
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
            justifyContent:'space-around'
            // flexWrap: 'wrap'
          }}>
          <Box
            sx={{
              m: '45px 20px 0 10px',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              },
              cursor: 'pointer'
            }}>
            <img
              style={{ minWidth: 355, minHeight: 434 }}
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
              cursor: 'pointer'
            }}>
            <img
              style={{ minWidth: 355, minHeight: 434 }}
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
              cursor: 'pointer'
            }}>
            <img
              style={{ minWidth: 355, minHeight: 434 }}
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
          height: '874px',
          bgcolor: 'primary.main'
        }}>
      </Box>
      {/* end Beautify Your Space */}
      {/* Browse The Range */}
      <Box sx={{
        mt: '60px',
        borderBottom: 1
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
            justifyContent:'space-around'
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
                cursor: 'pointer'
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
                lineHeight: '28px'
              }}>
                {item?.description}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {/* end How It Works */}
    </Box>
  )
}

export default BoardContent
