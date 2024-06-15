import './App.css'
import NavBar from './components/NavBar';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import NowPlaying from './pages/SecondpageMovies/NowPlaying';
import TopRatedMovies from './pages/SecondpageMovies/TopRatedMovies';
import UpComingMovies from './pages/SecondpageMovies/UpComingMovies';
import PopularMovies from './pages/SecondpageMovies/PopularMovies';
function App() {


  return (
    <>
    <BrowserRouter>
  <NavBar/>
   <Routes>
 <Route path="Movie_Ticket_Booking/" element={<Homepage />}/>
 <Route path="Movie_Ticket_Booking/nowplaying" element={<NowPlaying/>}/>
 <Route path="Movie_Ticket_Booking/TopRated" element={<TopRatedMovies/>}/>
 <Route path="Movie_Ticket_Booking/upcoming" element={<UpComingMovies/>}/>
 <Route path="Movie_Ticket_Booking/popular" element={<PopularMovies/>}/>
  </Routes> 
  </BrowserRouter> 
    </>
  )
}

export default App
