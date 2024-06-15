import React from 'react'
import './Moviescard.css';
function Moviescard({movie}) {
  return (
  <>

<div className="card moviescard h-100 ">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className='text-center fw-bold'>{movie.title}</h4>
                <p>{movie.overview}</p>
            </div>
        </div>
</>
  );
}

export default Moviescard;