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
        flexDirection="column"
        //width="80%"
        paddingTop="30px"
        paddingBottom                                                                                         ="30px"
        alignItems="center"
      >
        <Typography variant="h5" color={shades.primary[500]} mb="5px">
          NEWSLETTER SIGN-UP
        </Typography>
        <TextField id="filled-basic" label="Email" variant="filled"  />
        <Button variant="contained"  mt="50px" onClick={() => {}}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Subscribe;
