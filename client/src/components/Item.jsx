import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  IconButton,
  Box,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
import { HOST } from "../constant";

const Item = ({ item, width }) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  const { category, price, name, image } = item.attributes;

  // This destructuring gets the URL provided by Strapi
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          // width="320px"
          // height="auto"

          height="380px"
          width="300px"

          src={`${HOST}${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{
            cursor: "pointer",
            maxWidth: "100%",
            objectFit: "cover",
            
          }}
        />

        {/* OVERLAY FOR ADDING TO CART ----- */}
        <Box
          display={isHovered || !isNonMobile ? "block" : "none"}
          position="absolute"
          bottom="5%"
          left="0"
          width="100%"
          padding="0 5%"
          zIndex="99"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton
                onClick={() => setCount(Math.max(count - 1, 1))}
                aria-label="Decrease item count"
              >
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton
                onClick={() => setCount(count + 1)}
                aria-label="Increase item count"
              >
                <AddIcon />
              </IconButton>
            </Box>

            {/* ADD TO CART BUTTON OVERLAY */}
            <Button
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              sx={{
                backgroundColor: shades.primary[300],
                color: "white",
                ":hover": {
                  bgcolor: shades.primary[600],
                  color: "white",
                },
              }}
            >
              ADD TO CART
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {category
            ?.replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">{price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
