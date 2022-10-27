import "./style.scss"
const gerenciaDeNomes = require("./js/gerenciaDenomes")



function executar_01(){
    const nome = document.querySelector("#nome").value
    const sobrenomenome = document.querySelector("#sobrenome").value
    const resultado = gerenciaDeNomes.juntarNomes(nome, sobrenomenome)
    const divResultado = document.querySelector("#mostrar_nome")
    divResultado.innerHTML = resultado
}

const botao_01 = document.querySelector("#botao_ex_01")
botao_01.addEventListener("click", executar_01)

console.log("PASSOU AQUI TAMBÉM")