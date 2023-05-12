import {
  Box,
  Button,
  Checkbox,
  Divider,
  Typography,
  FormControlLabel,
  useMediaQuery
} from "@mui/material";

const handleClearClick = () => {
  setFilters([]);
};

const CatalogMenu = ({setFilters}) => {
  const isNonMobile = useMediaQuery("(min-width: 900px)");

  return (
    <Box
      width="100%"
      height={isNonMobile ? "300px" : "50px"}
      border="2px solid #ECECEC"
      borderRadius="10px"
      // backgroundColor={isNonMobile? "red" : "green"}
      overflow="scroll"
    >
      <Box display="flex" m="15px 15px" justifyContent="space-between" >
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
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="end"
            label="Flowers"
          />
          <FormControlLabel control={<Checkbox />} label="Bouquet" />
          <FormControlLabel control={<Checkbox />} label="Test" />
          <FormControlLabel control={<Checkbox />} label="Test" />
        </Box>

        <Divider variant="middle" />

        <Box display="flex" flexDirection="column" m="10px 15px">
          <FormControlLabel control={<Checkbox />} label="Flowers" />
          <FormControlLabel control={<Checkbox />} label="Bouquet" />
          <FormControlLabel control={<Checkbox />} label="Test" />
          <FormControlLabel control={<Checkbox />} label="Test" />
        </Box>
      </Box>
    </Box>
  );
};

export default CatalogMenu;
