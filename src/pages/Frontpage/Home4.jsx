import React, { useState, useEffect } from 'react'
import Home4Card from '../../common/Home4Card';
import './Home4.css';
import Loader from '../../common/Loader/Loader';

function Home4() {

  const [upComingMovies, setupComingMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {

      const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODFkNDA2OWQxMDVjM2UwMWMyYjg2NmI0MzkzNzVlOCIsInN1YiI6IjY1MGRhYTk3NGRhM2Q0MDE0ZDU2YTRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ix5Vjro5xKdKwPF5dPcivlkuJyOt_IpGGSZKlcMDwiI'
        }
      };

      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
      const data = await response.json();
      setupComingMovies(data.results.slice(0, 8));
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

      <div id='home4'>
        <div className="hom4heading pt-3 pb-1">
          <p className='text-center text-secondary h5'>New Upcoming Movies</p>
          <h1 className='text-center upcomingmovies pt-2'>Movies Coming Soon</h1>
        </div>
          
              {
                !upComingMovies ? (
                  <div className="m-5 p-5 d-flex justify-content-center text-center">
                    <Loader />
                  </div>
                ) : (
                 <div className="container">
                   <div className="row row-cols-1 row-cols-md-4 g-4 pt-5 ">
                    {
                  upComingMovies.map(movie => (
                    <div className="col" key={movie.id}>
                      <Home4Card movie={movie} />
                    </div>
                  ))}
                  </div>
                 </div>
                )}
      </div>

    </>
  )

}

export default Home4;

