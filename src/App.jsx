import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  display: block;
  font-size: 30px;
  margin: 30px auto;
  padding: 10px;
`;

const List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 0;
  li {
    font-size: 30px;
    margin: 10px 0;
  }
`;

function App() {
  const [nomeDoImposto, setNomeDoImposto] = useState("");
  const [valorBruto, setValorBruto] = useState("");

  return (
    <div className="App">
      <Input
        type="text"
        placeholder="Nome do Imposto"
        value={nomeDoImposto}
        onChange={(e) => setNomeDoImposto(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Valor Bruto"
        value={valorBruto}
        onChange={(e) => setValorBruto(e.target.value)}
      />
      <List>
        <li>
          Nome do Imposto: <strong>{nomeDoImposto}</strong>
        </li>
        <li>
          Valor Bruto: <strong>{valorBruto}</strong>
        </li>
      </List>
    </div>
  );
}

export default App;
