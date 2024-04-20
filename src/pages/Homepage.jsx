import React from 'react'
import { Link } from 'react-router-dom';
import '../pages/Homepage.css';
import Home1 from './Frontpage/Home1';
import Home2 from './Frontpage/Home2';
import Home3 from './Frontpage/Home3';
import Home4 from './Frontpage/Home4';
import Home5discount from './Frontpage/Home5discount';
import Feedback from './Frontpage/Feedback';
import Footer from '../common/Footer';
function Homepage() {
  return (
    <>
    
     <div className="home">
     <div className='container'>
     <h1 className='text-light hometitle'>Welcome to our Movie Theater !</h1>
    <p className='text-light h5'>Check out the latest movies and book your tickets now.</p>
    <Link to="/movies"><button className="moreinfobtn mt-3">More Info</button></Link>
    </div>
    </div>
    <Home1/>
    <Home2/>
    <Home3/>
    <Home4/>
    <Home5discount/>
    <Feedback/>
    <Footer/>


  </>
  )
}

export default Homepage;