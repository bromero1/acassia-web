import { Box, useMediaQuery, Typography, Grid } from "@mui/material";
import { useEffect } from "react";
import { setItems } from "../../state";
import CatalogGrid from "./CatalogGrid";
import { useDispatch, useSelector } from "react-redux";
import CatalogMenu from "./CatalogMenu";

const Catalog = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
    // setItems(itemsJson);
    console.log(itemsJson);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Grid container spacing={2} m="80px auto">
      <Grid item xs={12} md={3}>
        <Typography variant="h5">Home / Products</Typography>
      </Grid>
      <Grid item xs={12} md={9}>
      <Typography variant="h3">Shop All</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <CatalogMenu isNonMobile={isNonMobile} />
      </Grid>

      <Grid item xs={12} md={9}>
        <CatalogGrid isNonMobile={isNonMobile} />
      </Grid>
    </Grid>
  );
};

export default Catalog;
