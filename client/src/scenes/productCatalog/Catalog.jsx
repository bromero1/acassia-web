import { Box, useMediaQuery, Typography, Grid } from "@mui/material";
import Item from "../../components/Item";
import { useEffect, useState } from "react";

const Catalog = () => {
  const [items, setItems] = useState({});
  const [filters, setFilters] = useState([]);
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    // dispatch(setItems(itemsJson.data));
    setItems(itemsJson);
    console.log(itemsJson);
  }

  useEffect(() => {
    getItems();
  }, []);
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <Box backgroundColor="red">xs=6 md=8</Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box backgroundColor="red">xs=6 md=4</Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box backgroundColor="red">xs=6 md=4</Box>
      </Grid>
      <Grid item xs={6} md={8}>
        <Box backgroundColor="red">xs=6 md=8</Box>
      </Grid>
    </Grid>
  );
};

export default Catalog;
