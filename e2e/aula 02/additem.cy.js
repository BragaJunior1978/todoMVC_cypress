import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Adicionar itens na minha lista de toDo', () => {

   beforeEach (()=>{
        cy.visit('/')
   })

   it.skip('Adicionar um item na lista', () => {

   telaInicial.inputText("Braga")
   telaInicial.inputText("Junior")
   telaInicial.inputText("QA")
   })

   it('Adicionar mais um item a lista', () => {
     
     var todoItens = ["Maca", "Banana", "Cenoura"]

     todoItens.forEach(function(item, indice,array ){
          telaInicial.inputText(item)

   })
   
});

});