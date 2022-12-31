
import './App.css';
<<<<<<< HEAD
import { CiDark } from "react-icons/ci";
=======

>>>>>>> 4127cf4ce401f16cf944712026d07a3e4b5370dd
// import ShowMyFlashcard from './Components/ShowMyFlashcard'
import CreateFlashCard from './Pages/CreateFlashCard';
import MyCards from './Pages/MyCards';
import ShowAllCreatedCards from './Pages/ShowAllCreatedCards';
import Homepage from './Pages/Homepage';
import {Routes, Route} from 'react-router-dom'
<<<<<<< HEAD
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
=======
>>>>>>> 4127cf4ce401f16cf944712026d07a3e4b5370dd

export const ThemeContext =  createContext(null)
function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme =()=>{
    theme === "dark" ? setTheme("light") : setTheme("dark")
  };
  return (
<<<<<<< HEAD
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div  id = {theme} className=" main w-full min-h-screen bg-color #f8f4ef font-Montserrat flex items-center space-x-10 mb-3">
      <div className=''>
    <ReactSwitch onChange={changeTheme} checked={theme === "dark"} />
    </div>
    <div className='px-5 xl:px-32 container mx-auto'>
    <Homepage />
    
    <Routes>
    <Route path='/' element={<CreateFlashCard />} />
    <Route path='/myflashcard' element={<MyCards />} />
    <Route path='/showallcreatedcards/:groupId' element={<ShowAllCreatedCards />} />
        </Routes>
    
    </div>
   </div>
   </ThemeContext.Provider>
=======
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
>>>>>>> 4127cf4ce401f16cf944712026d07a3e4b5370dd
  );
}

export default App;
