function CardDetalhes({ usuario }) {
  if (!usuario) return null;

  return (
    <div style={{ border: '2px solid #333', padding: '16px', margin: '16px', borderRadius: '8px' }}>
      <h2>{usuario.name}</h2>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Telefone:</strong> {usuario.phone}</p>
      <p><strong>Site:</strong> {usuario.website}</p>
      <p><strong>Cidade:</strong> {usuario.address.city}</p>
      <p><strong>Empresa:</strong> {usuario.company.name}</p>
    </div>
  );
}

export default CardDetalhes;