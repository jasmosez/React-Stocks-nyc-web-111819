import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      
      {/* Radio Buttons */}
      <form>
        <div className="radio">
          <strong>Sort by:</strong>
          <label>
          <input type="radio" value="Alphabetically" checked={props.sort === "Alphabetically"} onChange={(event) => { props.sortHandler(event.target.value) }} />
            Alphabetically
          </label>
          <label>
          <input type="radio" value="Price" checked={props.sort === "Price"} onChange={(event) => { props.sortHandler(event.target.value) }}/>
            Price
          </label>
        </div>
      </form>

      <br/>
      <hr />

      {/* Filter Select */}
      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.filterHandler(event.target.value)} value={props.filter}>
          <option value="">Show All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
