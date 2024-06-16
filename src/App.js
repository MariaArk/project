import React, { useState } from "react";
import Couter from "./component/counter";
import ClassCounter from "./component/ClassCounter";

function App() {
  const state = useState(0)
  return (
    <div className="App">
      <ClassCounter/>
    </div>
  );
}

export default App;
