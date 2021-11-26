import React from "react";
import "./Cadastro.css";
import Api from "../../api/api";

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // pego o valor que usuario digitou nos inputs
    const nome = evento.target.nome.value;
    const ocupacao = evento.target.ocupacao.value;
    const frutadodiabo = evento.target.frutadodiabo.value;
    const imagemUrl = evento.target.imagemUrl.value;

    const vaga = {
      nome,
      ocupacao,
      frutadodiabo,
      imagemUrl,
    };

    try {
      const response = await Api.fetchPost(vaga);
      const result = await response.json();
      alert(result.message);
      history.push("/"); // forca o historico a voltar para a rota de / => home
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro Personagens OnePiece</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="titulo"
                    id="floatingInput"
                    placeholder="Digite o Titulo"
                  />
                  <label htmlFor="floatingInput">Nome do Personagem</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    name="salario"
                    id="floatingsalario"
                    placeholder="Digite o Salario"
                  />
                  <label htmlFor="floatingsalario">Ocupação</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="descricao"
                    id="floatingInput"
                    placeholder="Digite a Descricao"
                  />
                  <label htmlFor="floatingInput">Fruta do Diabo</label>
                {/* </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select
                    className="form-control"
                    name="senioridade"
                    id="floatingsenioridade"
                    placeholder="Digite a Senioridade"
                  >
                    <option value="junior">Junior</option>
                    <option value="pleno">Pleno</option>
                    <option value="pleno">Senior</option>
                  </select> */}

</div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="descricao"
                    id="floatingInput"
                    placeholder="Digite a Descricao"
                  />





                  <label htmlFor="floatingsenioridade">ImagemUrl</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">
                  Enviar
                </button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
