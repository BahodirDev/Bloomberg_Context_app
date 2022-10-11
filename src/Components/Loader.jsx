import React, { useEffect, useState } from 'react';
import '../styles/loader.css'

function Loader(props) {

    const [state,setState] = useState(3)

      let son =   setInterval(()=>{
            setState(state - 1)
        },1000)

        if(state === 0){
            clearInterval(son)
        }
    

        console.log(state);

    return (
       <div className='loader'>
         <div className="box">
            <h2>{state}</h2>
        </div>
       </div>
    );
}

export default Loader;