import React from 'react'
import Box from '@mui/material/Box'

function Doctors() {
  return (
    <Box sx={{ cursor: 'pointer', '&:hover' : { color: 'info.main' } }}>Doctors</Box>
  )
}

export default Doctors