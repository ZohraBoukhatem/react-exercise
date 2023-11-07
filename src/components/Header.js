import React from 'react';

function Header(props) {
  return (
    <div className="css">
      <h1>Header</h1>
      <h2>Number of movies: {props.number} </h2>
    </div>
  );
}

export default Header;
