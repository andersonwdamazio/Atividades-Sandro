import Header from "./Header";

export default function App() {
  const texto = "show!";

  return (
    <div className="App">
      <Header titulo="Cabeçalho" />
      <h1>teste {texto}</h1>
    </div>
  )
}