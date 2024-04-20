import React from 'react'
import '../Frontpage/Home1.css';
import festival from '../../assets/Homecollection/festival-icon.png';
import comedy from '../../assets/Homecollection/comedy-icon.png';
import award from '../../assets/Homecollection/award-icon.png';
function Home1() {
  return (
    <>

      <div id="home1">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-3">
            <div className="col">
              <div className="card h-100  festivalcard pb-2 pt-3">
                <div className="card-body">
                  <div className="d-flex justify-content-evenly">
                 <div>
                 <p className="card-text text-light text-opacity-75">Join Now</p>
                  <p className="card-text text-light h3">Upcoming Film Festival</p>
                 </div>
                 <div className='festivalicon'>
                 <img src={festival} className="card-img-top " alt="..." />
                 </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100  festivalcard pb-2 pt-3">
                <div className="card-body">
                  <div className="d-flex justify-content-evenly">
                 <div>
                 <p className="card-text text-light text-opacity-75">Watch Now</p>
                  <p className="card-text text-light h3">Watch Film Awards</p>
                 </div>
                 <div className='awardicon'>
                 <img src={award} className="card-img-top" alt="..." />
                 </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100  festivalcard pb-2 pt-3">
                <div className="card-body">
                  <div className="d-flex justify-content-evenly">
                 <div>
                 <p className="card-text text-light text-opacity-75">Get Ticket</p>
                  <p className="card-text text-light h3">Comedy TV Shows</p>
                 </div>
                 <div className='comedyicon'>
                 <img src={comedy} className="card-img-top" alt="..." />
                 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home1;