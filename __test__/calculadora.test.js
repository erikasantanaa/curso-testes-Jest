
const aula = require('../calculadora');

describe('calculadora', () => {
    
    it('devera retornar a soma de dois numeros', () => {
        expect(aula.soma(2,1)).toBe(3);
    });

    it('devera retornar a multiplicação de dois numeros', () => {
        expect(aula.multi(2,1)).toBe(2);
    });

    it ('devera retonar a divisao de dois numeros', () => {
        expect(aula.divisao(9,3)).toBe(3);
    })

    it('devera retornar a subtracao de dois numeros', () => {
        expect(aula.subtracao(10,4)).toBe(6);
    });
});
