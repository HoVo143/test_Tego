import React from 'react'
import Box from '@mui/material/Box'

function Gallery() {
  return (
    <Box sx={{ cursor: 'pointer', '&:hover' : { color: 'info.main' } }}>Gallery</Box>
  )
}

export default Gallery