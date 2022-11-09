import React from "react";
import {useState} from 'react'


function CreateGroup() {
 const [inputValue, setInputvalue]= useState('')


    return(
<div className="p-5 bg-slate-300 m-6 mx-1.5 my-1.5">
<form>
    <label className="relative block">Create Group <span className="after:content-['*']"></span></label><br />
    <div className="flex items-center space-x-6">    <input type="text" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1"  /> 
<input type='file' className="w-30 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 text sm text-slate-300" />

</div>

</form>
</div>
    )
}

export default CreateGroup;