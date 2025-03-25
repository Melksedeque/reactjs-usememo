import { useState } from "react";
import "./App.css";

function App() {
  const [nomeDoImposto, setNomeDoImposto] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Nome do Imposto"
        value={nomeDoImposto}
        onChange={(e) => setNomeDoImposto(e.target.value)}
      />
    </div>
  );
}

export default App;
