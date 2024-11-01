import React, { useEffect, useState } from "react";

function Hello() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //console.log("helloworld");
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>{count}</h2>
    </div>
  );
}
export default Hello;
