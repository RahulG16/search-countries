import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchPage.css";
import { useNavigate } from "react-router-dom";

interface Props {
  handleSubmit: (searchTerm: string) => void;
}

function SearchPage({ handleSubmit }: Props) {
  let [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  return (
    <div className="searchform">
      <header>Search Countries</header>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (searchTerm.length > 0) {
            handleSubmit(searchTerm);
            navigate(`/search-countries/countryinfo/${searchTerm}`);
          }
        }}
      >
        <TextField
          id="outlined-basic"
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
          label="Country Name"
          variant="outlined"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchPage;
