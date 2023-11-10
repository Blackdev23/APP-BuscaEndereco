function LimparFormulario(){
    document.querySelector('.value-logradouro').value = ""
    document.querySelector('.value-bairro').value = ""
    document.querySelector('.value-localidade').value = ""
    document.querySelector('.value-uf').value = ""
    document.querySelector('.value-ddd').value = ""
}

function VizualizarDados(dados){
    console.log(dados)

    document.querySelector('.value-logradouro').value = dados.logradouro
    document.querySelector('.value-bairro').value = dados.bairro
    document.querySelector('.value-localidade').value = dados.localidade
    document.querySelector('.value-uf').value = dados.uf
    document.querySelector('.value-ddd').value = dados.ddd
}

async function BuscarCep(cep){
    const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())
    VizualizarDados(dados)
}

function CliqueBotao(){
    const cep = document.querySelector('.input-cep').value
    BuscarCep(cep)
}