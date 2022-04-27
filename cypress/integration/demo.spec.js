/// <reference types="cypress" />



// describe('assessment', () => {
//   before('test to find out I am on the right website', () => {
//       it('test to find out I am on the right website', ()=>{
//         cy.visit('https://www.mytruq.com')
     
//         cy.get('head > title').should('contain', 'truQ | The Smartest Way To Move Anything')
//         cy.get('.flex-wrap > :nth-child(1) > .items-center > .w-full > :nth-child(1)').should('have.text', 'What if moving')
//       })
     
//     })
//     it('test to find out that website is responsive', () => {
//       cy.visit('https://www.mytruq.com')
//       cy.get('.style_lg_active').click().should('have.class', 'style_lg_active')
//       cy.get('.ml-10 > [href="/about"]').click()
//       cy.get('[href="/driver-partner"]').click()
//       cy.get('.ml-10 > [href="/business"]').click()
//     })
//     it('test to successful sign up', ()=>{
//       cy.visit('https://www.mytruq.com')
//       cy.get('.hidden > .flex > .button_primary').click()
//       cy.get('.swipe-button').click()
//       cy.get('.swipe-button').click()
//       cy.get('#root > div > div > div.fixed.w-full.z-20 > nav > div > div > div:nth-child(3) > div > div > button.button_primary.gap-x-2.lg\:gap-x-4.text-labels.lg\:text-sm-regular.xl\:px-8.px-3.py-3.undefined.undefined').click()

//     })
//     it('test to verify that I can login without sign up',()=>{
//       cy.visit('https://www.mytruq.com')
//       cy.get('.flex > .button_light').click()
//       cy.get('.swipe-button').click()
//       cy.get('.swipe-button').click()
//       cy.contains('<button class="button_light gap-x-2 lg:gap-x-4 text-labels lg:text-sm-regular xl:px-8 px-3 py-3 btn_bordered undefined" type="button">Log in</button>').click()
      
//     })
// })
describe('Actions', () =>{

    it('google', () => {

        cy.visit('https://google.com')
        cy.get('.gLFyf').type('automation step by step{enter}')
        cy.wait(4000)
        cy.contains('Videos').click()

    })

})
it('login test', ()=>{
    cy.visit('https://gmail.com')
    cy.get('.cxMOTc > .rFrNMe > .aCsJod > .aXBtI > .OabDMe').type('esther.thompson@getmollo.com')
})

it.only('test', () =>{
    cy.visit('https://getmollo.com')
    cy.get('.header-container > .left-side > .waitlist-form-container > .input-container > [placeholder="Full Name"]')
    .type('Esther Thompson')
    cy.get('.header-container > .left-side > .waitlist-form-container > .input-container > [placeholder="Email"]')
    .type('esther.thompson@getmollo.com')
})
