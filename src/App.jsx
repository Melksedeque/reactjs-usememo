import "./App.css";

function App() {
  const [nomeDoImposto, setNomeDoImposto] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Nome do Imposto"
        value={nomeDoImposto}
        onChange={(e) => setNomeDoImposto(e.target.value)}
      />
    </>
  );
}

export default App;
