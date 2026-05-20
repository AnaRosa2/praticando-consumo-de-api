function Card({ nome, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px', margin: '8px', borderRadius: '8px' }}>
      <p>{nome}</p>
    </div>
  );
}

export default Card;