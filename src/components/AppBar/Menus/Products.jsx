import React from 'react'
import Box from '@mui/material/Box'

function Products() {
  return (
    <Box sx={{ cursor: 'pointer', '&:hover' : { color: 'info.main' } }}>Products</Box>
  )
}

export default Products