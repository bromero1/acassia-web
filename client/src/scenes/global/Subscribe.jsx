import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { shades } from "../../theme";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState();

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const subscribeToEmail = async () => {

    try {
      const response = await fetch("http://localhost:1337/api/subscribers", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({data: {"email": email}}),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      mt="0"
      width="100%"
      backgroundColor={shades.secondary[300]}
      padding="80px auto"
    >
      <Box
        display="flex"
        flexDirection="column"
        //width="80%"
        paddingTop="30px"
        paddingBottom="30px"
        alignItems="center"
      >
        <Typography
          variant="h5"
          color={shades.primary[500]}
          mb="15px"
          letterSpacing="1.4px"
        >
          NEWSLETTER SIGN-UP
        </Typography>

        <Box mb="10px">
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            fullWidth
            onChange={emailChange}
          />
        </Box>

        <Button
          variant="contained"
          mt={12}
          onClick={() => {
            subscribeToEmail();
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Subscribe;
