import React from 'react'
/* BOOSTRAP */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchBar() {
  return (

    <Form className="input-group mt-3" onSubmit="search(event)">
<input
  type="text"
  class="form-control"
  id="searchField"
  placeholder="Search"
  aria-label="Search"
  aria-describedby="basic-addon2"
/>
<div className="input-group-append">
  <Button
    className="btn btn-outline-light btn-sm h-100 bg-transparent "
    type="submit"
  >
    GO
  </Button>
</div>
</Form>
  )
}

export default SearchBar
