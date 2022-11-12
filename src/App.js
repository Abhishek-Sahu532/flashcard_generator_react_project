
import './App.css';
import CreateFlashcard from './Components/CreateFlashcard/CreateFlashcard';
import MyFlashcard from './Components/CreateFlashcard/MyFlashcard';
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App bg-slate-100 h-screen">
      <Navbar />
    {/* <CreateFlashcard /> */}
    <MyFlashcard/>
    </div>
  );
}

export default App;
