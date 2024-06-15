import React, { useState, useEffect } from 'react'
import Loader from '../../common/Loader/Loader';
import Moviescard from '../../common/Movie/Moviescard';
import './MoviesPage.css'

function TopRatedMovies() {
    const [topRatedMovies, setTopRatedMovies] = useState(null);

    useEffect(() => {
      const fetchMovies = async () => {
  
       try {
        const options = {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODFkNDA2OWQxMDVjM2UwMWMyYjg2NmI0MzkzNzVlOCIsInN1YiI6IjY1MGRhYTk3NGRhM2Q0MDE0ZDU2YTRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ix5Vjro5xKdKwPF5dPcivlkuJyOt_IpGGSZKlcMDwiI'
          }
        };
  
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const data = await response.json();
        setTopRatedMovies(data);
       } catch (error) {
        console.error(error);
        setTopRatedMovies([]);
       }
    
      };
  
      // Fetch the now playing movies after a 3-second delay
      const timer = setTimeout(() => {
        fetchMovies();
      }, 3000);
  
      // Clean up the timer when the component unmounts
      return () => {
        clearTimeout(timer);
      };
    }, []);
  
    return (
      <>
        <div>
          <div className="moviespage pt-5 pb-1">
            <p className='text-center text-secondary h5'>ENTERTAINMENT MOVIES</p>
            <h1 className='text-center moviespageheading pt-2'>TOP RATED MOVIES</h1>
          </div>
          {
            !topRatedMovies ? (
              <div className="m-5 p-5 d-flex justify-content-center text-center">
                <Loader />
              </div>
            ) : (
              <div className='moviespageoutercard'>
                <div className="row row-cols-1 row-cols-md-4 g-4  ">
  
                  {
                    topRatedMovies.results.map(movie => (
                      <div className="col " key={movie.id}>
                        <Moviescard movie={movie} />
                      </div>
                    ))}
                </div>
              </div>
            )}
  
        </div>
      </>
    )
}

export default TopRatedMovies;