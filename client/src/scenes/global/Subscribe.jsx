import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { shades } from "../../theme";

const Subscribe = () => {
  return (
    <Box
      mt="80px"
      width="100%"
      backgroundColor={shades.secondary[200]}
      padding="80px auto"
    >
      <Box
        display="flex"
        // padding="60px auto"
        flexDirection="column"
        width="80%"
      >
        <Typography variant="h5" color={shades.primary[500]}>
          Subscribe for deals and new products
        </Typography>
        <TextField id="filled-basic" label="Email" variant="filled" />
        <Button variant="contained" onClick={()=>{}}>Submit</Button>
      </Box>
    </Box>
  );
};

export default Subscribe;
