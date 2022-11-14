import React from "react";
import {Routes, Route} from 'react-router-dom'
import CreateFlashcard from '../Components/CreateFlashcard/CreateFlashcard';
// import Navbar from '../Components/Navbar'

import ShowMyFlashcard from '../Components/ShowMyFlashcard'

function Router1(){
    return(
<div className="router">
  
<Routes>
    <Route path="/" element={ <CreateFlashcard />} />
    <Route path='/showmyflash' element ={ <ShowMyFlashcard />} />
</Routes>
</div>

    )
}

export default Router1;