import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Shashank Dada ko podcast
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center ">Cool Podcasts</span>
        </h1>
        <p className="desc text-center">
          Networking sikne bhai bahini haru ko lagi podcast
        </p>
      </section>
    </>
  );
}

export default App;
