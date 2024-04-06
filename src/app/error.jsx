'use client'

import { useEffect } from "react"

function error({error,reset}) {
    useEffect(()=>{
        // reset()
        console.log(error)
    },[error])
    return (
        <div className="text-center mt-10 ">
           <h1>Something went wrong. please try again later.</h1>
           <button className="hover:text-amber-600 " onClick={()=>reset()}>Try again</button>
        </div>
    )
}

export default error
