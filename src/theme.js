
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({

  typography: {
    fontFamily: [
      'Montserrat'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#F2F5FF'
    }
  }
})
export default theme