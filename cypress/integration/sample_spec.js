describe('My First Test', () => {
    it('', () => {
      cy.visit('https://dev-um.streaming.studio4d.com')
  
       cy.get('[href="/xp-experience"] > .pui-bg-blue-500').click()
  
    })
  })
  