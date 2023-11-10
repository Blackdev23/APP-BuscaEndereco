function LimparFormulario(){
    document.querySelector('.value-cep').value = ""
}

function VizualizarDados(dados){
    console.log(dados)

    document.querySelector('.value-cep').value = dados[0].cep
}
async function BuscarCep(uf,cidade,logradouro){
    const dados = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`).then(Response => Response.json())
    VizualizarDados(dados)
}

function CliqueBotao(){
    const uf = document.querySelector('.input-uf').value
    const cidade = document.querySelector('.input-cidade').value
    const logradouro = document.querySelector('.input-logradouro').value
    BuscarCep(uf,cidade,logradouro)
}