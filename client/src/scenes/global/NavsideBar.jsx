import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { shades } from "../../theme";

import styled from "@emotion/styled";
import { setIsMenuOpen } from "../../state";
import { useDispatch, useSelector } from "react-redux";

const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: ${shades.primary[600]};
  }
  font-weight: 500;
`;

const links = [
  { title: "Shop Catalog", link: "/catalog" },
  { title: "Mother's Day", link: "/mothersday" },
  { title: "Sale", link: "/sale" },
  { title: "Account", link: "/account" },
];

const NavsideBar = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const cart = useSelector((state) => state.cart.cart);
  const isMenuOpen = useSelector((state) => state.cart.isMenuOpen);
  // console.log(isMenuOpen);
  const dispatch = useDispatch();
  return (
    <Box //Overlay
      display={isMenuOpen ? "block" : "none"}
      sx={{ backgroundColor: "rgba(0,0,0, .3)", backdropFilter: "blur(4px)" }}
      position="fixed"
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
      style={{ zIndex:"1999"}}
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width={isNonMobile ? "max(400px, 30%)" : "100%"}
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Box display="flex" alignItems="flex-end">
              <IconButton onClick={() => dispatch(setIsMenuOpen({}))}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h4"
              color="primary"
              sx={{ fontFamily: `'Dancing Script', cursive` }}
            >
              Acassia Flowers
            </Typography>
          </FlexBox>

          <Box>
            {links.map((link) => (
              <Box key={`${link.title}`} mb="20px" mt="20px">
                <FlexBox padding="2px 0">
                  <Box flex="1 1 40%">
                    <StyledLink
                      variant="h5"
                      underline="none"
                      href={link.link}
                      color="black"
                      onClick={() => dispatch(setIsMenuOpen(false))}
                    >
                      {link.title}
                    </StyledLink>
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                      <IconButton></IconButton>
                    </FlexBox>
                    <Typography></Typography>

                    {/* PRICE */}
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* ACTIONS */}
        </Box>
      </Box>
    </Box>
  );
};

export default NavsideBar;
