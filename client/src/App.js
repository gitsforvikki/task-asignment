import React,{useEffect, useState} from 'react';
import axios from 'axios'
let App = ()=>{
  const [state,setState] = useState()

  
  return(
    <React.Fragment>
      <h3>Data coming from backend</h3>
      {state}
    </React.Fragment>
  )
}

export default App;
