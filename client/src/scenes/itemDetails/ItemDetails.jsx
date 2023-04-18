import React, { useEffect } from "react";
import { useState } from "react";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { API } from "../../constant";

const ItemDetails = () => {
  // Gets the item id that is passed to the route
  // E.g host/api/items/{itemId}
  let { itemId } = useParams();

  const [item, setItem] = useState([]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

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
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
        </Box>
        {/* Right side box containing item info and actions */}
        <Box flex="1 1 50%">
          <Box display="flex" justifyContent="space-between">
            <Box onClick={handleBack}>Back</Box>
            <Box>Next </Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3"> {item?.attributes?.name}</Typography>
            <Typography> ${item?.attributes?.price}</Typography>
            <Typography mt="20px">
              {" "}
              {item?.attributes?.longDescription}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
