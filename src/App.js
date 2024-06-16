import React, { useState } from "react";
import Couter from "./component/counter";

function App() {
  const state = useState(0)
  return (
    <div className="App">
      <Couter/>
    </div>
  );
}

export default App;
