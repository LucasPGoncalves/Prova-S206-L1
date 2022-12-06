/// <reference types = "cypress"/>

describe('Teste no site globalsqa(Banking Project)', () => {


  it("Caso de teste: Realizando registro de um cliente e abre uma conta", () => {
    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass1"]').click()
    let cliente = criaCliente()
    let FullName = cliente[0] + ' ' + cliente[1]
    cy.get(':nth-child(1) > .form-control').type(cliente[0])
    cy.get(':nth-child(2) > .form-control').type(cliente[1])
    cy.get(':nth-child(3) > .form-control').type(cliente[2])
    cy.get('form.ng-dirty > .btn').click()
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('#userSelect').select(FullName)
    cy.get('#currency').select(cliente[3])
    cy.get('form.ng-dirty > button').click()
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.marTop').should('contain.text', cliente[0])
    cy.get('.marTop').should('contain.text', cliente[1])
    cy.get('.marTop').should('contain.text', cliente[2])
  })

  it("Caso de teste: Testa se o cliente tem uma conta registrada e faz o login", () => {
    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
    let cliente = criaCliente()
    cy.createCliente(cliente)
    let FullName = cliente[0] + ' ' + cliente[1]
    cy.get('.home').click()
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select(cliente[0] + ' ' + cliente[1])
    cy.get('form.ng-valid > .btn').click()
    cy.get('.fontBig').should('have.text', FullName)
  })

  it("Caso de teste: Testa se o cliente nao consegue ", () => {
    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
    let cliente = criaCliente()
    cy.createClientePlus(cliente)
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').type(10000000)
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('be.visible')
  })

})

function criaCliente() {
  let FirstNameList = ['James', 'Julio', 'Roberto', 'Carlos', 'Lucas']
  let LastNameList = ['da Salada de Fruta', 'Silva', 'Pereira', 'Fernandes', 'Garcia']
  let CurrencyList = ['Dollar', 'Pound', 'Rupee']
  let Hours = new Date().getHours().toString()
  let Mins = new Date().getMinutes().toString()
  let Segs = new Date().getSeconds().toString()

  let FirstName = pickRandom(FirstNameList)
  let LastName = pickRandom(LastNameList)
  let PostCode = Hours * Mins + Segs + '-' + Math.ceil(Math.random() * 99)
  let Currency = pickRandom(CurrencyList)
  let userInfo = [FirstName,LastName, PostCode, Currency]
  return userInfo
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}