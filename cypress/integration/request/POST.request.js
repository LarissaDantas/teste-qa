/// <reference types="cypress" />

const payloadLinhaValidaTitulo = require('../payloads/titulo-bancario/linha-valida-titulo.json')
const payloadLinhaInvalidaTitulo = require('../payloads/titulo-bancario/linha-invalida-titulo.json')
const payloadCaracterInvalidoTitulo = require('../payloads/titulo-bancario/caracter-invalido-titulo.json')
const payloadTamanhoLinhaInvalidoTitulo = require('../payloads/titulo-bancario/tamanho-linha-invalido-titulo.json')
//-----------------------------------
const payloadLinhaValidaConcessionaria = require('../payloads/concessionaria/linha-valida-concessionaria.json')
const payloadLinhaInvalidaConcessionaria = require('../payloads/concessionaria/linha-invalida-concessionaria.json')
const payloadCaracterInvalidoConcessionaria = require('../payloads/concessionaria/caracter-invalido-concessionaria.json')
const payloadTamanhoLinhaInvalidoConcessionaria = require('../payloads/concessionaria/tamanho-linha-invalido-concessionaria.json')


//-----Titulo

function PostLinhaValidaTitulo() {
    return cy.request({
        method: 'POST',
        url: 'boleto',
        failOnStatusCode: false,
        body: payloadLinhaValidaTitulo
    })
}

function PostLinhaInvalidaTitulo() {
    return cy.request({
        method: 'POST',
        url: 'boleto',
        failOnStatusCode: false,
        body: payloadLinhaInvalidaTitulo
    })
}

function PostCaracterInvalidoTitulo() {
    return cy.request({
        method: 'POST',
        url: 'boleto',
        failOnStatusCode: false,
        body: payloadCaracterInvalidoTitulo
    })
}

function PostTamanhoLinhaInvalidoTitulo() {
    return cy.request({
        method: 'POST',
        url: 'boleto',
        failOnStatusCode: false,
        body: payloadTamanhoLinhaInvalidoTitulo
    })
}

//--------Concessionaria

function PostLinhaConcessionaria() {
    return cy.request({
        method: 'POST',
        url: 'boleto',
        failOnStatusCode: false,
        body: payloadLinhaValidaConcessionaria
    })
}

function PostLinhaInvalidaConcessionaria() {
    return cy.request({
        method: 'POST',
        url: 'boleto',
        failOnStatusCode: false,
        body: payloadLinhaInvalidaConcessionaria
    })
}

function PostCaracterInvalidoConcessionaria() {
    return cy.request({
        method: 'POST',
        url: 'boleto',
        failOnStatusCode: false,
        body: payloadCaracterInvalidoConcessionaria
    })
}

function PostTamanhoLinhaInvalidoConcessionaria() {
    return cy.request({
        method: 'POST',
        url: 'boleto',
        failOnStatusCode: false,
        body: payloadTamanhoLinhaInvalidoConcessionaria
    })
}

export { PostLinhaValidaTitulo };
export { PostLinhaInvalidaTitulo };
export { PostCaracterInvalidoTitulo };
export { PostTamanhoLinhaInvalidoTitulo };
export { PostLinhaConcessionaria };
export { PostLinhaInvalidaConcessionaria };
export { PostCaracterInvalidoConcessionaria };
export { PostTamanhoLinhaInvalidoConcessionaria };