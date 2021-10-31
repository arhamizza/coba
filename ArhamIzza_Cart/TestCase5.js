//Nama          : Arham Izza Syany
//NIM/N0        : 1941720127 (03)
//Kelas         : TI-3B
//Test Case     : Checkout Tanpa menambah belanjaan 

describe('Insert Name with words', () => {
    it('Visits saucedemo', () => {
    //masuk ke web saucedemo
    cy.visit('https://www.saucedemo.com/')
      //akses ke username
      cy.get('#user-name')
      //menulis username
      .type('standard_user')
       //akses ke password
      cy.get('#password')
      //menuliskan password
      .type('secret_sauce')
      //klik tombol login
      cy.contains('Login').click()
      //klik tombol cart
      cy.get('.shopping_cart_link').click()
      //klik Checkout
      cy.get('#checkout').click()
    })
  })