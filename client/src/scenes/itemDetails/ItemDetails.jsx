import React, { useEffect } from "react";
import { useState } from "react";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { API, HOST } from "../../constant";

const ItemDetails = () => {
  // Gets the item id that is passed to the route
  // E.g host/api/items/{itemId}
  let { itemId } = useParams();

  const [item, setItem] = useState([]);

  const getItem = async () => {
    const response = await fetch(
      `${API}/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    const jsonData = await response.json();
    setItem(jsonData.data);
  };

  useEffect(() => {
    getItem();
  }, [itemId]);

  return (
    //Box for the whole item screen
    <Box width="80%" margin="80px auto">
      {/* Box containing the left(image) and right (item info and actions) */}
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* Image box section */}
        {/* mb when flex starts to wrap  */}
        <Box flex="1 1 40%" mb="40px" backgroundColor="green">
          <img
            alt={item.name}
            width="100%"
            height="100%"
            src={`${HOST}${item?.attributes?.image?.data?.attributes?.url}`}
            style={{ objectFit: "contain" }}
          />
        </Box>
        {/* Right side box containing item info and actions */}
        <Box backgroundColor={shades.secondary[500]} flex="1 1 40%" >
          <Typography> {item?.attributes?.name}</Typography>
          <Typography> {item?.attributes?.longDescription}</Typography>
          <Typography> {item?.attributes?.price}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
