import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [outcome, setOutcome] = useState("");
  
  async function handleSurvive() {
    const API = "https://wild-west-api.onrender.com/survive";
    const res = await axios.get(API);
    setOutcome(res.data);
     console.log('outcome', outcome)
    const firstWord = res.data.replace(/ .*/, "");
    console.log("firstWord", firstWord);
  }

  return (
    <div className="App">

      <button onClick={handleSurvive}>Brave the oregon trail!</button>
      {outcome}
      <br />
    </div>
  );
}

export default App;
