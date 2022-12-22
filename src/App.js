
import './App.css';

// import ShowMyFlashcard from './Components/ShowMyFlashcard'
import CreateFlashCard from './Pages/CreateFlashCard';
import MyCards from './Pages/MyCards';
import ShowAllCreatedCards from './Pages/ShowAllCreatedCards';
import Homepage from './Pages/Homepage';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="w-full min-h-screen bg-[#f8f4ef] font-Montserrat">
    
    <div className='px-5 xl:px-32 container mx-auto'>
    <Homepage />
    
    <Routes>
    <Route path='/' element={<CreateFlashCard />} />
    <Route path='/myflashcard' element={<MyCards />} />
    <Route path='/showallcreatedcards/:groupId' element={<ShowAllCreatedCards />} />
        </Routes>
    
    </div>
    </div>
  );
}

export default App;
