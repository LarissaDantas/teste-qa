import * as POST from '../request/POST.request'

describe('Pagamento Concessionária', () => {

    it('Validar Pagamento Concessionária - Linha válida',() => {
        POST.PostLinhaConcessionaria().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.codigoBarras).to.eq("81770000000010936599704113107970300143370831");
            expect(response.body.linhaValida).to.eq(true);
        })
    });

    it('Validar Pagamento Concessionária - Linha inválida',() => {
        POST.PostLinhaInvalidaConcessionaria().should((response) => {
            expect(response.body.error).to.eq("Linha digitada é inválida");
        })
    });

    it('Validar Pagamento Concessionária - Tamanho Linha',() => {
        POST.PostTamanhoLinhaInvalidoConcessionaria().should((response) => {
            expect(response.body.error).to.eq("Tamanho da linha é inválida");
        })
    });

    it('Validar Pagamento Concessionária - Caracteres Invalido',() => {
        POST.PostCaracterInvalidoConcessionaria().should((response) => {
            expect(response.body.error).to.eq("Caracteres inválidos");
        })
    });
});