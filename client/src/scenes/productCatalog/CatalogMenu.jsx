import {
  Box,
  Button,
  Checkbox,
  Divider,
  Typography,
  FormControlLabel,
} from "@mui/material";
const CatalogMenu = (isNonMobile) => {
  return (
    <Box
      width="100%"
      height="500px"
      border="2px solid #ECECEC"
      borderRadius="10px"
    >
      <Box display="flex" m="15px 15px" justifyContent="space-between">
        <Typography fontSize="24px">Filter</Typography>
        <Button
          variant="outlined"
          height="30px"
          sx={{ letterSpacing: "1px", fontSize: "14px" }}
        >
          Clear
        </Button>
      </Box>

      <Divider variant="middle" />

      <Box width="100%" display="flex" flexDirection="column">
        <Box display="flex" flexDirection="column" m="10px 15px">
          <FormControlLabel control={<Checkbox />} label="Flowers" />
          <FormControlLabel control={<Checkbox />} label="Bouquet" />
          <FormControlLabel control={<Checkbox />} label="Individual" />
          <FormControlLabel control={<Checkbox />} label="Supplies" />
        </Box>

        <Divider variant="middle" />

        <Box display="flex" flexDirection="column" m="10px 15px">
          <FormControlLabel control={<Checkbox />} label="Flowers" />
          <FormControlLabel control={<Checkbox />} label="Bouquet" />
          <FormControlLabel control={<Checkbox />} label="Individual" />
          <FormControlLabel control={<Checkbox />} label="Supplies" />
        </Box>
      </Box>
    </Box>
  );
};

export default CatalogMenu;
