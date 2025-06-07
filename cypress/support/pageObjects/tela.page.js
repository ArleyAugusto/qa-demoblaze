class TelaPage {
  visitarSite() {
    cy.visit('https://www.demoblaze.com/');
  }

  abrirModalCadastro() {
    cy.get('#signin2').click();
  }

  abrirModalLogin() {
    cy.get('#login2').click();
  }

  preencherCadastro(usuario, senha) {
    cy.get('#sign-username').should('be.visible').type(usuario);
    cy.get('#sign-password').should('be.visible').type(senha);
  }

  confirmarCadastro() {
    cy.get('button[onclick="register()"]').click();
  }

  realizarCadastro(usuario, senha) {
    this.abrirModalCadastro();
    this.preencherCadastro(usuario, senha);
    this.confirmarCadastro();
  }

  preencherLogin(usuario, senha) {
    cy.get('#loginusername').should('be.visible').type(usuario);
    cy.get('#loginpassword').should('be.visible').type(senha);
  }

  confirmarLogin() {
    cy.get('button[onclick="logIn()"]').click();
  }

  realizarLogin(usuario, senha) {
    this.abrirModalLogin();
    cy.get('#logInModal').should('be.visible').and('have.class', 'show');
    this.preencherLogin(usuario, senha);
    this.confirmarLogin();
  }

  preencherSomenteSenha(senha) {
    this.abrirModalLogin();
    cy.get('#logInModal').should('be.visible');
    cy.get('#loginpassword').should('be.visible').type(senha);
    this.confirmarLogin();
  }

  preencherSomenteUsuario(usuario) {
    this.abrirModalLogin();
    cy.get('#logInModal').should('be.visible');
    cy.get('#loginusername').should('be.visible').type(usuario);
    this.confirmarLogin();
  }

  adicionarProdutoAoCarrinho() {
    cy.get('.btn-success').contains('Add to cart').click();
  }

  acessarCarrinho() {
    cy.get('#cartur').click();
  }

  abrirCheckout() {
    cy.get('button[data-target="#orderModal"]').click();
  }

  confirmarCompra() {
    cy.get('button[onclick="purchaseOrder()"]').click();
  }

}

export default new TelaPage();