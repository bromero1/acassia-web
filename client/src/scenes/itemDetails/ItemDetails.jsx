import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ItemDetails = () => {
  let { itemId } = useParams();

  const getItem = async () => {
    const response = await fetch(`http://localhost:1337/api/items/${itemId}`, {
      method: "GET",
    });

    const jsonData = await response.json();
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <Box width="80%" margin="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box backgroundColor="red" width="50"></Box>

        <Box backgroundColor="red"></Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
