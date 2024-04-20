import React from 'react';
import './Home4card.css';
function Home4Card({movie}) {
  return (
<>
  
    <div className="card h-100 cardborder">
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center">{movie.original_title}</h5>

      </div>
    </div>

</>
  )
}

export default Home4Card;