import React from "react";
import { useState } from "react";
import "./ReUsestate.css";

function ReUseState() {
  const [state, setState] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        change
      </button>
      <h1>{state ? "Lokesh" : "varma"}</h1>
    </div>
  );
}
export default ReUseState;
