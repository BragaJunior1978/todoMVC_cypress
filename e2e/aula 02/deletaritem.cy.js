import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Deletar item da lista', () => {

   beforeEach (()=>{
        cy.visit('/')
        var todoItens = ["Maca", "Banana", "Cenoura"]

     todoItens.forEach(function(item, indice,array ){
          telaInicial.inputText(item)

        })  
   })

  
   it('Deleção de um item da lista', () => {
       telaInicial.deletarItem()
   });
   

});