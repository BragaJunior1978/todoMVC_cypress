import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Validar os filtros da aplicação após adição de item', () => {

   beforeEach (()=>{
        cy.visit('/')
        var todoItens = ["Maca", "Banana", "Cenoura"]

     todoItens.forEach(function(item, indice,array ){
          telaInicial.inputText(item)

   })

   telaInicial.concluirItem()
   })

  /**
   * clicar no filtro
   * o filtro ser exibido
   * e o contador deve bater a informação
   */
   it('Filtrar itens ativos', () => {
       telaInicial.filtrarItem("Active")
   });
   

});