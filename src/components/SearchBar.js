import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <Form inline onSubmit={onSearch} className="search-bar">
      <FormControl
        type="text"
        placeholder="Search for books"
        className="mr-sm-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="outline-success" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
