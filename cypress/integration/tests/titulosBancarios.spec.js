import * as POST from '../request/POST.request'

describe('Títulos Bancários', () => {

    it('Validar Titulos Bancário - Linha válida',() => {
        POST.PostLinhaValidaTitulo().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.codigoBarras).to.eq("00193373700000001000500940144816060680935031");
            expect(response.body.dataVencimento).to.eq("31/12/2007");
            expect(response.body.linhaValida).to.eq(true);
            expect(response.body.valor).to.eq("1.00");
        })
    });

    it('Validar Titulos Bancário - Linha inválida',() => {
        POST.PostLinhaInvalidaTitulo().should((response) => {
            expect(response.body.error).to.eq("Linha digitada é inválida");
        })
    });

    it('Validar Titulos Bancário - Tamanho Linha',() => {
        POST.PostTamanhoLinhaInvalidoTitulo().should((response) => {
            expect(response.body.error).to.eq("Tamanho da linha é inválida");
        })
    });

    it('Validar Titulos Bancário - Caracter Invalido',() => {
        POST.PostCaracterInvalidoTitulo().should((response) => {
            expect(response.body.error).to.eq("Caracteres inválidos");
        })
    });
});