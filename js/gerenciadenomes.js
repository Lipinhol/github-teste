function juntarNomes (primeiroNome, sobrenome){
    console.log("PASSOU AQUI")
    return `${primeiroNome} ${sobrenome}`
}
    
    

function nomeEhValido(nome) {
    return nome != ""
}

module.exports.juntarNomes = juntarNomes
module.exports.nomeEhValido = nomeEhValido