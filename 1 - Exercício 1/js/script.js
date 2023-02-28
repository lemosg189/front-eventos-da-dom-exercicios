const imputNumeroUm = document.querySelector('#n1')
const imputNumeroDois = document.querySelector('#n2')
const add = document.querySelector('#add')
const minus = document.querySelector('#minus')
const divide = document.querySelector('#divide')
const multiply = document.querySelector('#multiply')
let h2Resultado = document.querySelector('h2')
let valorOperacao = 0

add.onclick = () => {
    valorOperacao = Number(imputNumeroUm.value) + Number(imputNumeroDois.value)
    resultado(valorOperacao)
}

minus.onclick = () => {
    valorOperacao = Number(imputNumeroUm.value) - Number(imputNumeroDois.value)
    resultado(valorOperacao)
}

divide.onclick = () => {
    valorOperacao = Number(imputNumeroUm.value) / Number(imputNumeroDois.value)
    resultado(valorOperacao)
}

multiply.onclick = () => {
    valorOperacao = Number(imputNumeroUm.value) * Number(imputNumeroDois.value)
    resultado(valorOperacao)
}

const resultado = (valorResultado) => {
    h2Resultado.textContent = `Resultado: ${valorResultado}`

}

