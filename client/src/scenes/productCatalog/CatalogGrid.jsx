import { Box } from "@mui/material";
import Item from "../../components/Item";
import { useSelector } from "react-redux";

const CatalogGrid = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <Box
      margin="0 auto"
      display="grid"
      gridTemplateColumns="repeat(2, 300px)"
      justifyContent="space-around"
      rowGap="20px"
    //   columnGap="1.33%"
    >
      {items.map((item) => (
        <Item item={item} key={`${item.attributes.name}-${item.id}`} />
      ))}
    </Box>
  );
};

export default CatalogGrid;
