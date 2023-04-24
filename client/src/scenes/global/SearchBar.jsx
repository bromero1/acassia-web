import { useSelector } from "react-redux";
import { TextField, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

// { setSearchQuery }
const SearchBar = () => {
  const data = useSelector((state) => state.cart.items);
  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.attributes.name.toLowerCase().includes(query));
    }
  };

  return (
    <Box width mt="80px">
      <form>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            setSearchQuery(e.target.value);
          }}
          label="Enter a city name"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>
    </Box>
  );
};

export default SearchBar;
