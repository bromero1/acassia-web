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
  console.log("🚀 ~ file: ShoppingList.jsx:12 ~ ShoppingList ~ items:", items);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  // FILTERS FOR ITEMS
  // ---------------------------------------------
  const topRatedFilter = items.filter(
    (item) => item.attributes.category === "topRated"
  );

  const newArrivalsFilter = items.filter(
    (item) => item.attributes.category === "newArrivals"
  );

  const bestSellersFilter = items.filter(
    (item) => item.attributes.category === "bestSellers"
  );

  // ---------------------------------------------

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h2" textAlign="center">
        Take your pick
      </Typography>

      <Tabs onChange={handleChange} value={value} centered>
        <Tab label="NEW ARRIVALS" value="newArrivals"></Tab>
        <Tab label="BEST SELLERS" value="bestSellers"></Tab>
        <Tab label="TOP RATED" value="topRated"></Tab>
        <Tab label="ALL" value="all"></Tab>
      </Tabs>

      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
