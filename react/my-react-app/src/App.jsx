

import { useState } from "react";
import Show from "./Show";

function App() {
  const [count,setCount] = useState(0);

  return (
    <>
    <h1>Hello World !</h1>
    <p>{count}</p>
    <button onClick={()=> setCount(count+1)}>Add</button>
    <button onClick={()=> setCount(count-1)}>Subtract</button>
    <Show></Show>
    </>
  );
}

export default App;