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
  let [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="searchform">
      <header>Search Countries</header>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (searchTerm.length > 0) {
            handleSubmit(searchTerm);
            navigate(`/countryinfo/${searchTerm}`);
          }
        }}
      >
        <TextField
          id="standard-basic"
          label="Country Name"
          variant="standard"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (e.target.value.length > 0) {
              setDisabled(false);
            } else {
              setDisabled(true);
            }
          }}
        />
        <Button name='search' disabled={disabled} variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchPage;
