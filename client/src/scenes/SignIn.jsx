import {
  Box,
  FormControl,
  TextField,
  Button,
  FormLabel,
  Typography,
  Card,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "../constant";
import { setToken } from "../helpers";
import { useAuthContext } from "../context/AuthContext";
import { shades } from "../theme";

const SignIn = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useAuthContext();

  const onFinish = async () => {
    setIsLoading(true);
    try {
      const value = {
        identifier: username,
        password: password,
      };

      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set token in local storage
        setToken(data.jwt);

        //setUser
        setUser(data.user);

        navigate("/account", { replace: true });
      }
    } catch (error) {
      console.log("Error Logging in: ");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      flexDirection="column"
    >
      <Typography
        variant="h2"
        color={shades.primary[500]}
        align="center"
        mb="5px"
      >
        Sign In
      </Typography>

      <FormControl>
        <FormLabel>Enter Email</FormLabel>
        <TextField
          fullWidth
          id="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></TextField>

        <FormLabel>Enter Password</FormLabel>
        <TextField
          id="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
        ></TextField>

        <Button
          type="submit"
          onClick={onFinish}
          sx={{
            backgroundColor: shades.primary[600],
            color: "white",
            "&:hover": { backgroundColor: shades.primary[400] },
          }}
        >
          Submit
        </Button>

          <Typography
          to="/reset"> Forgot Password</Typography>
         

      </FormControl>
    </Box>
  );
};

export default SignIn;