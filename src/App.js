
import './App.css';
// <<<<<<< HEAD
import CreateFlashcard from './Components/CreateFlashcard/CreateFlashcard';
import MyFlashcard from './Components/CreateFlashcard/MyFlashcard';
// =======
// import CreateFlashcard from './Components/CreateFlashcard/CreateFlashcard';
// import MyFlashcard from './Components/MyFlashcard';
// >>>>>>> e26f97c698882a3bf5a959fa3986d8d8803c9fe3
import Navbar from './Components/Navbar'
// import ShowMyFlashcard from './Components/ShowMyFlashcard'
import {Link} from 'react-router-dom'
import Router1  from './Router/Router1';  


function App() {
  return (
    <div className="App b g-slate-100 h-screen">
      <Navbar />
{/* <<<<<<< HEAD */}
    {/* <CreateFlashcard /> */}
    {/* <MyFlashcard/> */}
{/* ======= */}
<div className='text-lg font-normal ml-10 text-slate-500 pl-8 pr-12'>
  
<Link to="/" >Create New</Link>
<Link className='ml-3' to="showmyflash" >My Flashcard</Link>
<hr/>
</div>
     <Router1 />
{/* >>>>>>> e26f97c698882a3bf5a959fa3986d8d8803c9fe3 */}
    </div>
  );
}

export default App;
