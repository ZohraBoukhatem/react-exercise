import React from 'react';

function Movies(props) {
  return (
    <div className="css">
      <h1> {props.name} </h1>
      <h2>Rating: {props.rating}</h2>
    </div>
  );
}

export default Movies;
