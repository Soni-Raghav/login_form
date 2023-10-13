import React from 'react'
const Spread = () =>{
    const fullName=['raghav','soni',1,'k',7]
    const bioData=[1,...fullName,'here']
   
    return(
        <>
             {console.log(fullName)}
             {console.log(bioData)}
        </>
    
    )}
export default Spread;