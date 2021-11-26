import React from "react";
import "./Cadastro.css";
import Api from "../../api/api";

const Cadastro = (props) => {
    const history = props.history;

    const handleSubmit = async(evento) => {
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

    return ( <
        div className = "container cadastro" >
        <
        div className = "card mt-4" >
        <
        div className = "card-title" >
        <
        div className = "row" >
        <
        div className = "col" >
        <
        h3 > Tripulações dos Piratas < /h3> <
        /div> <
        /div> <
        /div> <
        div className = "card-body" >
        <
        form onSubmit = { handleSubmit } >
        <
        div className = "row" >
        <
        div className = "col" >
        <
        div className = "form-floating mb-3" >
        <
        input type = "text"
        className = "form-control"
        name = "nome"
        id = "floatingInput"
        placeholder = "Digite o nome do prato" /
        >
        <
        label htmlFor = "floatingInput" > Nome < /label> <
        /div> <
        /div> <
        div className = "col" >
        <
        div className = "form-floating" >
        <
        input type = "text"
        className = "form-control"
        name = "ocupacao"
        id = "floatingsalario"
        placeholder = "Digite os in do prato" /
        >
        <
        label htmlFor = "floatingsalario" > Ocupação < /label> <
        /div> <
        /div> <
        /div> <
        div className = "row" >
        <
        div className = "col" >
        <
        div className = "form-floating mb-3" >
        <
        input type = "text"
        className = "form-control"
        name = "frutadodiabo"
        id = "floatingInput"
        placeholder = "Digite o modo de preparo" /
        >
        <
        label htmlFor = "floatingInput" > Fruta do Diabo < /label> <
            /div> <
            /div> <
            /div> <
            div className = "row" >
            <
            div className = "col" >
            <
            div className = "form-floating mb-3" >
            <
            input
        type = "text"
        className = "form-control"
        name = "imagemUrl"
        id = "floatingInput"
        placeholder = "Insira a URL da imagem" /
        >
        <
        label htmlFor = "floatingInput" > ImagemUrl < /label> <
        /div> <
        /div> <
        /div> <
        div className = "row" >
        <
        div className = "col" >
        <
        button className = "btn btn-success"
        type = "submit" >
        Enviar <
        /button> <
        button className = "btn btn-outline-default" > Voltar < /button> <
        /div> <
        /div> <
        /form> <
        /div> <
        /div> <
        /div>
    );
};

export default Cadastro;