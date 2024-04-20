import React from 'react';

const defaultnowplayingdata = {
  "adult": false,
    "backdrop_path": "/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg",
    "genre_ids": [
      28,
      12,
      35
    ],
    "id": 848538,
    "original_language": "en",
    "original_title": "Argylle",
    "overview": "When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
    "popularity": 1194.396,
    "poster_path": "/95VlSEfLMqeX36UVcHJuNlWEpwf.jpg",
    "release_date": "2024-01-31",
    "title": "Argylle",
    "video": false,
    "vote_average": 6.172,
    "vote_count": 639
}

function Home2Carousel({ slides = defaultnowplayingdata }) {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner">
          {
            slides.map((movie, i) => {
              return (
                <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    className="d-block w-100" alt="..." />
                  <div className="carousel-caption text-start d-none d-md-block">

                    <div className="card h-100 w-100 text-bg-dark bg-opacity-50">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <p className='pt-5 h4'>{movie.title}</p>
                            <p className='pt-3'>{movie.overview}</p>
                            <p><span className='fw-medium'>Release Date:</span> {movie.release_date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })

          }

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Home2Carousel;