import React from 'react'
import Box from '@mui/material/Box'

function Home() {
  return (
    <Box sx={{ cursor: 'pointer', '&:hover' : { color: 'info.main' } }}>Home</Box>
  )
}

export default Home