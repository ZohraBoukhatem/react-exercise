import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import Movies from './components/Movies';
import './style.css';

export default function App() {
  const moviesArray = [
    {
      title: 'The Godfather',
      rating: 9,
    },
    {
      title: 'Pulp Fiction',
      rating: 8,
    },
    {
      title: 'Coco',
      rating: 9,
    },
  ];

  return (
    <div>
      <Header number={moviesArray.length} />
      <Movies name={moviesArray[0].title} rating={moviesArray[0].rating} />
      <Movies name={moviesArray[1].title} rating={moviesArray[1].rating} />
      <Movies name={moviesArray[2].title} rating={moviesArray[2].rating} />
      <Footer>
        <p>@ Remote degenerates</p>
        <p>2023</p>
      </Footer>
    </div>
  );
}
