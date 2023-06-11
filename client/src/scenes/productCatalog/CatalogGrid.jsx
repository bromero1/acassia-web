import { Box, Grid, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { useSelector } from "react-redux";

const CatalogGrid = () => {
  const isNonMobile = useMediaQuery("(min-width: 900px)");
  const items = useSelector((state) => state.cart.items);

  return (
    <Grid container spacing={2} 
    alignItems={"center" }
    maxWidth="lg"
    justifyContent={!isNonMobile? "center": ""}
    marginLeft={!isNonMobile? "": "10%"}
    
    
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
