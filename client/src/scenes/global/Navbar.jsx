import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import logo from "../../assets/logo.svg"
// Box for container
// Box to center 3 sections of navbar
//   - Logo
//   - Menu items
//   - Icons

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // state.cart.cart
  const cart = useSelector((state) => state.cart.cart);

  return (
    // Containing the whole navbar
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="80px"
      backgroundColor={"white"}
      // position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      {/* Container aligning sections within navbar */}
      <Box
        width="80%"
        margin="auto"
        maxHeight="100%"
        display="flex"
        justifyContent="space-between"
        alignContent="center"
      >
        {/* LOGO */}
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.primary[500]}
          alignContent="center"
        >
          <img 
            objectFit="contain"
            src={logo}
            height="80px"
            />
          {/* <Typography sx={{fontSize: "36px"}}>Acassia</Typography> */}
        </Box>

        {/* MENU ITEMS */}
        {/* <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"

        >

          Insert Menu items here

        </Box> */}

        {/* ICONS */}

        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          {/* search button */}
          <IconButton>
            <SearchIcon />
          </IconButton>

          {/* account button */}
          <IconButton>
            <PersonIcon />
          </IconButton>

          {/* cart button */}
          <IconButton onClick={() => dispatch(setIsCartOpen())}>
            <Badge
              badgeContent={cart.length}
              color="secondary"
              invisible={cart.length === 0}
              sx={{
                "& .MuiBadge-badge": {
                  right: -3,
                  top: 1,
                  border: `2px solid white`,
                  fontFamily: "Roboto", fontSize:"12px", fontWeight:"700",
                  color: "white",
                  background: shades.primary[400],
                  zIndex: -1

                }
              }}

            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* menu button */}
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
