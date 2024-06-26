import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Regressivo ToDo App', () => {

context('Validar a tela inicial',() =>{
    beforeEach (()=>{
        cy.visit('/')
    })
    it('Validar a aria label de input de dados', () => {
        telaInicial.validarInput("What needs to be done?")
    })

})
context('Validar adição de item',() =>{
    beforeEach (()=>{
        cy.visit('/')
    })

    it('Adicionar mais um item a lista', () => {
     
        var todoItens = ["Maca", "Banana", "Cenoura"]
   
        todoItens.forEach(function(item, indice,array ){
             telaInicial.inputText(item)})
            /**
             * validar se o contador é igual a 3
             */
            telaInicial.validarContador(3)
      })

})
context('Validar a conclusão de item',() =>{
    beforeEach (()=>{
        cy.visit('/')
        var todoItens = ["Maca", "Banana", "Cenoura"]

     todoItens.forEach(function(item, indice,array ){
          telaInicial.inputText(item)

   })
})
 
it('Concluir um item da lista toDo', () => {
    telaInicial.concluirItem()
    telaInicial.validarContador(2)
    
    })
})





context('Validar o filtro da aplicação',() =>{
    beforeEach (()=>{
        cy.visit('/')
        var todoItens = ["Maca", "Banana", "Cenoura"]

     todoItens.forEach(function(item, indice,array ){
          telaInicial.inputText(item)

   })

   telaInicial.concluirItem()
   }) 

   it('Validar a lista de itens ativo', () => {
    telaInicial.filtrarItem("Active")
    telaInicial.validarSizeToDo(2)
   });

   it('Validar a lista de itens concluidos', () => {
      telaInicial.filtrarItem("Completed")
    telaInicial.validarSizeToDo(1)
   });
})
context('Validar a remoção de item',() =>{

    beforeEach (()=>{
        cy.visit('/')
        var todoItens = ["Maca", "Banana", "Cenoura"]

     todoItens.forEach(function(item, indice,array ){
          telaInicial.inputText(item)

        })  
   })

  
   it('Deleção de um item da lista', () => {
       telaInicial.deletarItem()
       telaInicial.validarSizeToDo(2)
   });
})

})