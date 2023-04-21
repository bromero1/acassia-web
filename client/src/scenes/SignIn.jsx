import {
  Box,
  FormControl,
  TextField,
  Button,
  FormLabel,
  Typography,
  Card,
  Link,
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
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log("Error Logging in: ");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Box height="100%" width="80%" m="80px auto">
      <Box
        display="flex"
        flexDirection="column"
        width="300px"
        minHeight="50vh"
        mt="200px"
        ml="auto"
        mr="auto"
      >
        <Typography
          variant="h2"
          color={shades.primary[500]}
          align="center"
          mb="15px"
        >
          Sign In
        </Typography>

        <FormControl>
          <Box mb="20px">
            <TextField
              fullWidth
              // variant="outlined"
              label="Email"
              id="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              p="10px"
            />
          </Box>

          <Box mb="10px">
            <TextField
              fullWidth
              id="password"
              label="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
            />
          </Box>

          <Button
            type="submit"
            onClick={onFinish}
            sx={{
              backgroundColor: shades.primary[600],
              color: "white",
              "&:hover": { backgroundColor: shades.primary[400] },
              letterSpacing: "2px",
              fontSize: ".8rem"
            }}
          >
            Submit
          </Button>
        </FormControl>

        <Link
          underline="none"
          href="/reset"
          onClick={() => {
            //navigate(/reset)
          }}
        >
          <Typography sx={{ fontSize: "1.01rem" }} mt="10px">
            Forgot Password
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default SignIn;
