
import './App.css';
<<<<<<< HEAD
=======
// import ShowMyFlashcard from './Components/ShowMyFlashcard'
>>>>>>> 63dc8a14595a2604afba4d838797cce63da859ee
import CreateFlashCard from './Pages/CreateFlashCard';
import MyCards from './Pages/MyCards';
import ShowAllCreatedCards from './Pages/ShowAllCreatedCards';
import Homepage from './Pages/Homepage';
import {Routes, Route} from 'react-router-dom'
import { createContext, useState } from 'react';
<<<<<<< HEAD
=======
// import { CiDark } from "react-icons/ci";
import ReactSwitch from 'react-switch';

>>>>>>> 63dc8a14595a2604afba4d838797cce63da859ee


// dark mode
export const ThemeContext =  createContext(null)

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme =()=>{
    theme === "dark" ? setTheme("light") : setTheme("dark")
  };
  return (

<<<<<<< HEAD
    <ThemeContext.Provider value={{theme, setTheme, changeTheme  }}>
    <div id={theme} className={`w-full bg-white font-Montserrat flex items-center space-x-10 mb-3`}>
=======
    <ThemeContext.Provider value={{theme, setTheme}}>


    <div id={theme} className={`w-full bg-white font-Montserrat flex items-center space-x-10 mb-3`}>
    
    <div className=''>
    <ReactSwitch onChange={changeTheme} checked={theme === "dark"} />
    </div>

>>>>>>> 63dc8a14595a2604afba4d838797cce63da859ee
    <div className='px-5 xl:px-32 container mx-auto'>
    <Homepage />
    <Routes>
    <Route path='/' element={<CreateFlashCard  theme={theme}/>} />
    <Route path='/myflashcard' element={<MyCards theme={theme} />} />
    <Route path='/showallcreatedcards/:groupId' element={<ShowAllCreatedCards theme={theme}/>} />
    </Routes>
<<<<<<< HEAD
=======
  
>>>>>>> 63dc8a14595a2604afba4d838797cce63da859ee
    </div>
   </div>
   </ThemeContext.Provider>
  );
}

export default App;


