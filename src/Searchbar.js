import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState('chicken');
  console.log("Query:", query);

  async function handleClick() {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}`
      );

      const data = await response.json();
      console.log("Data from API:", data);
      setRecipes(data.hits || []);
    } catch (error) {
      console.error("Fetch error: ", error);
      setRecipes([]);
    }
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <TextField
      label="Wyszukaj"
      value={query}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClick}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};
