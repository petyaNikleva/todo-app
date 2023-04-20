import { Box, Typography } from "@mui/material"


const Header = () => {
  return (
    <Box sx={{ my: 4, }}>
      <Typography color="grey" variant="h4" component="h1" gutterBottom>
        To Do Application
      </Typography>
    </Box>

  )
}

export default Header;