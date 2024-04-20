import React, { useState, useEffect } from 'react'
import Home2Carousel from '../../common/Home2Carousel';
import './Home2.css';
import Loader from '../../common/Loader/Loader';

function Home2() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODFkNDA2OWQxMDVjM2UwMWMyYjg2NmI0MzkzNzVlOCIsInN1YiI6IjY1MGRhYTk3NGRhM2Q0MDE0ZDU2YTRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ix5Vjro5xKdKwPF5dPcivlkuJyOt_IpGGSZKlcMDwiI',
        },
      };

      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
      const data = await response.json();
      setNowPlayingMovies(data);
    };

    // Fetch the now playing movies after a 3-second delay
    const timer = setTimeout(() => {
      fetchMovies();
    }, 4000);

    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='home2 '>
      <div className="home2heading pt-3 pb-1">
        <p className='text-center text-secondary h5'>Watch New Movies</p>
        <h1 className='text-center nowplaying pt-2'>Movie Now Playing</h1>
      </div>
      {
        !nowPlayingMovies ? (
          <div className="m-5 p-5 d-flex justify-content-center text-center">
            <Loader />
          </div>
        ) : (
          <div>
            <Home2Carousel slides={nowPlayingMovies.results} />
          </div>
        )}

    </div>
  )
}

export default Home2;