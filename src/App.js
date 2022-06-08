import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import "./App.css";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("./db.json")
      .then((res) => res.json())
      .then((json) => {
        const data = json.solutions;
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle (new word with every refresh)</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
