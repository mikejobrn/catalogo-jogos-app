import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { listarCatalogo } from '../api/api';
import './Catalogo.css';
import { format } from 'date-fns';

export default function Catalogo() {
    let [jogos, setJogos] = useState([]);

    useEffect(() => {
        listarCatalogo()
            .then((resultado) => {
                setJogos(resultado);
            });
    }, []);

    return (
        <div className="card-list">
            {jogos.map((jogo, i) => (
                <Card
                    key={i}
                    capa={jogo.urlCapaPaisagem}
                    logo={jogo.urlLogo}
                    titulo={jogo.nome}
                    ano={format(jogo.dataLancamento, 'yyyy')}
                    nota={jogo.avaliacao}
                />
            ))}
        </div>
    );
}
