import './Card.css';

export default function Card({ capa, logo, titulo, ano, nota }) {
    return <div className="card">
        <div className="thumbnail">
            <img width={300} height={150} src={capa} alt="" />
            <img width={200} height={50} src={logo} alt="" />
        </div>
        <div className="conteudo">
            <div className="conteudo-principal">
                <div className="titulo">{titulo}</div>
                <div className="ano">{ano}</div>
            </div>
            <div className="nota">{nota}</div>
        </div>
    </div>
}