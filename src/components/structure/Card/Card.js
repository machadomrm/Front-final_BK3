import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const vaga = props.data;
  return (
    <Link to={`/view/${vaga._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ vaga.nome }</h5>
          <span className="badge bg-primary">{ vaga.ocupacao }</span>
          <span className="badge bg-light text-dark"> { vaga.frutadodiabo }</span>
          <span className="badge bg-light text-dark"> { vaga.imagemUrl }</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
