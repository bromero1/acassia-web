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
    <Box width="90%" margin="80px auto" display="flex">
      <CatalogMenu isNonMobile={isNonMobile} /> 
      <CatalogGrid />
    </Box>
  );
};

export default Catalog;
