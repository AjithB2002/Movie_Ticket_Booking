import './App.css'
import NavBar from './components/NavBar';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {


  return (
    <>
    <BrowserRouter>
  <NavBar/>
   <Routes>
 <Route path="Movie_Ticket_Booking/" element={<Homepage />}/>
  </Routes> 
  </BrowserRouter> 
    </>
  )
}

export default App
