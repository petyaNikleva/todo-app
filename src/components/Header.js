import { Box, Typography } from "@mui/material"


const Header = () => {
  return (
    <Box sx={{ my: 4, }}>
      <Typography color="grey" variant="h4" component="h1" gutterBottom>
        Todo
      </Typography>
    </Box>

  )
}

export default Header;