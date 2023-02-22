import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  console.log("🚀 ~ file: ShoppingList.jsx:12 ~ ShoppingList ~ items:", items)
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return <div><h1>Shopping List</h1></div>;
};

export default ShoppingList;
