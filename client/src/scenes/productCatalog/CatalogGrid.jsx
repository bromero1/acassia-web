import { Box, Grid } from "@mui/material";
import Item from "../../components/Item";
import { useSelector } from "react-redux";

const CatalogGrid = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <Grid container spacing={2}
    >
      {items.map((item) => (
        <Grid item>
        <Item item={item} key={`${item.attributes.name}-${item.id}`} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CatalogGrid;
