fetch('https://gateway-app-6d53049979a9.herokuapp.com/api/Auth/create-account', {
    method: "POST",
    body: {
        nomeCompleto: "string",
        documento: "string",
        dataAniversario: "2024-07-27T12:25:02.764Z",
        email: "string",
        senha: "string",
        confirmacaoSenha: "string",
        endereco: {
            cep: "string",
            endereco: "string",
            estado: "string"
        }
    }
}).then(resposta => resposta.json())
  .then(dados => {console.log(dados)})
