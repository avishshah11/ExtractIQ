import { Button, Form, InputGroup } from "react-bootstrap";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-bar-container">
      <InputGroup className="search-bar">
        <Form.Control placeholder="Search..." />
        <Button>Search</Button>
      </InputGroup>
    </div>
  );
};

export default Search;
