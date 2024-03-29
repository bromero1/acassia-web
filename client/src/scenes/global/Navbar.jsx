import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Badge,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen, setIsMenuOpen } from "../../state";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";
import Typography from "@mui/material/Typography";

// Box for container
// Box to center 3 sections of navbar
//   - Logo
//   - Menu items
//   - Icons

const Navbar = () => {
  const isNonMobile = useMediaQuery("(min-width:900px)");

  const { user } = useAuthContext();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAccountToggle = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  const handleLogout = () => {
    removeToken();
    window.location.reload(false);
    // navigate("/signin", { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // Containing the whole navbar
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="80px"
      backgroundColor={"white"}
      position="sticky"
      top="0"
      left="0"
      zIndex="100"
      sx={{ boxShadow: 4, shadowOpacity: "0.1" }}
    >
      {/* Container aligning sections within navbar */}
      <Box
        width="80%"
        margin="auto"
        maxHeight="100%"
        // padding= "10px "
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
          <img src={logo} height="80px" alt="Acassia Flowers - Home" />
          {/* <Typography sx={{fontSize: "36px"}}>Acassia</Typography> */}
        </Box>

        {/* MENU ITEMS */}
        
        <Box
          display={isNonMobile? "flex": "none"}
          alignItems="center"
          justifyContent="space-evenly"
          width="40%"
        >
          <Link underline="hover" href="/catalog">
            <Typography letterSpacing=".8px" fontWeight="medium" color="black">
              Shop Flowers
            </Typography>
          </Link>
          <Link underline="hover" href="/catalog">
            <Typography letterSpacing=".8px" fontWeight="medium" color="black">
              Summer Collection
            </Typography>
          </Link>
          <Link underline="hover" href="/sale">
            <Typography letterSpacing=".8px" fontWeight="medium" color="black">
              Sale
            </Typography>
          </Link>
          <Link underline="hover" href="/sale">
            <Typography letterSpacing=".8px" fontWeight="medium" color="black">
              Occasion
            </Typography>
          </Link>
        </Box>

        {/* ICONS */}

        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          {/* search button ----------------------- */}
          <IconButton
            aria-label="Search for products"
            onClick={() => {
              navigate("/search");
            }}
          >
            <SearchIcon />
          </IconButton>
          
          
          {/* account button -----------------------*/}
          {isNonMobile && (
          <IconButton onClick={handleMenu} aria-label="My Account"> 
            <PersonIcon />
          </IconButton> )}
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {user && [
              <MenuItem
                key="account"
                onClick={() => {
                  navigate("/account");
                }}
              >
                My Account
              </MenuItem>,
              <MenuItem key="signout" onClick={handleLogout}>
                Sign Out
              </MenuItem>,
            ]}
            {!user && (
              <MenuItem
                key="signin"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Sign In
              </MenuItem>
            )}
          </Menu>

          {/* cart button ------------------------- */}
          <IconButton onClick={() => dispatch(setIsCartOpen())}
          aria-label="Shopping Cart">
            <Badge
              badgeContent={cart.length}
              color="secondary"
              invisible={cart.length === 0}
              sx={{
                "& .MuiBadge-badge": {
                  right: -3,
                  top: 1,
                  border: `2px solid white`,
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "white",
                  background: shades.primary[400],
                  zIndex: -1,
                },
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* menu button */}
          {!isNonMobile && (
            <IconButton onClick={() => dispatch(setIsMenuOpen())}
            aria-label="Open Menu">
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
