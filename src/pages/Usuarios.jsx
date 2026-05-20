import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import CardDetalhes from '../components/CardDetalhes';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((resposta) => {
        setUsuarios(resposta.data);
        setCarregando(false);
      })
      .catch((error) => {
        setErro('Erro ao carregar os usuários.');
        setCarregando(false);
      });
  }, []);

  if (carregando) return <p>Carregando usuários...</p>;
  if (erro) return <p>{erro}</p>;

  return (
    <div style={{ padding: '16px' }}>
      <h1>Lista de Usuários</h1>
      {usuarios.map((usuario) => (
        <Card
          key={usuario.id}
          nome={usuario.name}
          onClick={() => setUsuarioSelecionado(usuario)}
        />
      ))}
      <CardDetalhes usuario={usuarioSelecionado} />
    </div>
  );
}

export default Usuarios;