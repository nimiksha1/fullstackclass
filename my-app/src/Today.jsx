import React, { useEffect, useState } from 'react'

function Today() {
    const[count1,setcount1]=useState(10);
    const[count2,setcount2]=useState(100);
    useEffect(()=>{
     console.log("side effect happened");
     if(count2>=10){
        setcount2(0);
     }
    },[count2]
);
  return (
    <div>
<h1>The Count1 is {count1}</h1>
<h1>The Count2 is {count2}</h1>
<button onClick={()=>{setcount1(count1+1)}}>count1</button>
<button onClick={()=>{setcount2(count2+2)}}>count2</button>
    </div>
  )
}
export default Today