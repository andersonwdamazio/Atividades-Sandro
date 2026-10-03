export default function ProductCard({ produto }) {
  return (
    <div className="product-card">
      <h3>{produto.nome}</h3>
      <p>R$ {produto.valor}</p>
    </div>
  );
}