import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  useMediaQuery,
  Divider,
} from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state";
import { API } from "../../constant";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // Used to set which material-ui tab is displayed line 61
  const [value, setValue] = useState("newArrivals");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(`${API}/items?populate=image`, {
      method: "GET",
    });
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
        Choose an Experience
      </Typography>

      <Tabs onChange={handleChange} value={value} centered>
        <Tab label="NEW ARRIVALS" value="newArrivals"></Tab>
        <Tab label="BEST SELLERS" value="bestSellers"></Tab>
        <Tab label="TOP RATED" value="topRated"></Tab>
        {/* <Tab label="ALL" value="all"></Tab> */}
      </Tabs>
      <Box mb="20px">
        <Divider />
      </Box>

      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "newArrivals" &&
          items.map((item) => (
            <Item item={item} key={`${item.attributes.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
