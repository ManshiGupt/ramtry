import React, { useState } from 'react'

const Focus = () => {
    const[f,setF]= useState(false);
  return (
    <div>Focus
        <input className="border-2 border-gray-900" 
        onFocus={()=>setF(prev=>!prev)}
        onBlur={()=>setF(prev=>!prev)}
        />
        {f && <h1>fhfuhu</h1>}
    </div>
  )
}

export default Focus