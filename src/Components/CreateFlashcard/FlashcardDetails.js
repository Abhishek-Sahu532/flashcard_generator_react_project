import React from 'react'
import {useFormik} from 'formik'


function FlashcardDetails(){

 const formik = useFormik({

    
    initialValues: {
        addTerm: '',
        addDefination:'',
        imageUpload:''
    },
    
    validate: values=>{
        let error ={}

        if(!values.addTerm){
            error.addTerm ='Required'
        }
        return error
    }
    
 }) 

 console.log(formik.values)

    return(
<div className="p-3 bg-slate-300  mx-10 my-10 mx-auto">
    <form onSubmit={formik.onSubmit}>
<table className='table-auto'>
    <thead className='text-center'>
    <tr>
        <td ></td>
        <td className='decoration-gray-300 text-lg font-bold text-slate-700'>Enter Term<span className="after:content-['*'] form-label inline-block mb-2 "></span></td>
        <td className='decoration-gray-300 text-lg font-bold text-slate-700'>Enter Defination<span className="after:content-['*'] form-label inline-block mb-2 "></span></td>
        <td></td>
    </tr>
    </thead>
    <tbody>
        <tr className='mx-7'>
    <td className='bg-red-400 w-1/2 p-2 text-white font-bold rounded-full'>1</td>
{/* INPUT FOR ADD TERM */}
        <td > <input className='w-80 rounded mx-12 p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1' type="text" name='addTerm' id='addTerm' onChange={formik.handleChange} value={formik.values.addTerm} /> </td>
        
{/* INPUT FOR DEFINITION */}
        <td> <input className='w-80 rounded mx-12 p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1' type="text" name='addDefination' id='addDefination' onChange={formik.handleChange} value={formik.values.addDefination} /></td>
        <td>
            {/* BUTTON TO CHOOSE FILE */}
            <button> <input type="file" name="imageFile" id="imageFile" className=" w-15 mx-6 w-30 file:mr-4 file:py-2 file:px-4 file:p-4 file:border-0 file:text-sm file:font-semibold file:bg-white file:text-violet-700 hover:file:bg-violet-100 text sm text-slate-300" onChange={formik.handleChange} value={formik.values.imageUpload} /></button>
        </td>

    </tr>

    </tbody>
</table>
{/* MAIN BUTTON TO CREATE CARDS */}
<button className="bg-transparent  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-none hover:border-transparent rounded mt-5" name='imageUpload' id='imageUpload'>
 +Add More
</button>
</form>

</div>


    )
}


export default FlashcardDetails