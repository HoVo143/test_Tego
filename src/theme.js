
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
    },
    title: {
      main: '#054C73'
    },
    div: {
      main: '#333333'
    },
    p : {
      main: '#666666'
    }
  }

})
export default theme