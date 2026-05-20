import { useState, useEffect } from 'react';
import axios from 'axios';

function GaleriaFotos() {
  const [fotos, setFotos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((resposta) => {
        setFotos(resposta.data);
        setCarregando(false);
      })
      .catch((error) => {
        setErro('Erro ao carregar as fotos.');
        setCarregando(false);
      });
  }, []);

  if (carregando) return <p>Carregando fotos...</p>;
  if (erro) return <p>{erro}</p>;

  return (
    <div>
      <h2>Galeria de Fotos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', padding: '16px' }}>
        {fotos.map((foto) => (
          <div key={foto.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '8px', textAlign: 'center' }}>
            <img src={foto.thumbnailUrl} alt={foto.title} style={{ width: '100%' }} />
            <p style={{ fontSize: '12px' }}>{foto.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GaleriaFotos;