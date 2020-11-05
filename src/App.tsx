import React from "react";
import Like from "./components/Like";

const App: React.FC = () => {
  return (
    <div className="p-3">
      <header className="">
        <h1> Hello</h1>
        <Like />
      </header>
    </div>
  );
};

export default App;
