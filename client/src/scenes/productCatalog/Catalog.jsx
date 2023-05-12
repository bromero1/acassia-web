import {
  Box,
  useMediaQuery,
  Typography,
  Grid,
  Breadcrumbs,
  Divider,
  Link,
} from "@mui/material";
import { useEffect, useState } from "react";
import { setItems } from "../../state";
import CatalogGrid from "./CatalogGrid";
import { useDispatch, useSelector } from "react-redux";
import CatalogMenu from "./CatalogMenu";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
import { HOST } from "../../constant";

const Catalog = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [filters, setFilter] = useState();

  async function getItems() {
    const items = await fetch(`${HOST}/api/items?populate=image`, {
      method: "GET",
    });
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
    // setItems(itemsJson);
    // console.log(itemsJson);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Box width="95%" m="40px auto 80px auto">
      <Grid container spacing={2} columnSpacing={2}>
        <Grid item xs={12} md={3} mb="20px">
          {/* <Typography variant="h6">Home / Products</Typography> */}
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            <Link
              underline="hover"
              color={shades.primary[300]}
              href="/"
              // onClick={handleClick}
            >
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Catalog
            </Link>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12} md={9} mb="20px">
          <Typography variant="h4" sx={{ fontWeight: "medium" }} ml="20px">
            Shop All
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <CatalogMenu isNonMobile={isNonMobile} />
        </Grid>

        <Grid item xs={12} md={9}>
          <Divider variant="middle" m="20px" />

          <CatalogGrid isNonMobile={isNonMobile} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Catalog;
