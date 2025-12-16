"use client";

import { useState, useEffect } from "react";

// user interactivity/ states

export default function Page() {
  const [count, setCount] = useState(1);
  //set hooks
  //[value , setter func]
  // state is a variable that causes component to re-render when changed
  //When count changes, component using "count" re-renders
    const handlePlus = () => {
        setCount(count + 1);
    }
    
    //dependency check/watch
    useEffect(() => {
        alert("Component mounted")
    }, []);

    useEffect(() => {
        if (count === 0) {
            alert("Count is zero")
        }
    }, [count]); //every time count changes, this funcions runs
    //[count, var2, ...] multiple dependencies can be watched
    
    return (
      // re-render this when state changes
    <div>
          <div>Count: {count}</div>
          <button onClick={handlePlus} className="border p-2 bg-blue-500 text-white">
              Plus
          </button>
          <button onClick={() => setCount(count - 1)} //update with arrow function
              className="border p-2 bg-red-500 text-white rounded ml-2">
              Minus
          </button>
    </div>
  );
}
