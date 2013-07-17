'use strict'

describe('/index.html', function() {
 
    beforeEach(function() {
      browser().navigateTo('index.html')
    })

    it('H1 deve ser Quadro de Atividades', function() {
      expect(element('h1').text()).toEqual('Quadro de Atividades')
    })

    it ('Deve ter 9 THs no cabecalho', function() {
      expect(repeater('table thead th').count()).toBe(9)
    })

})
