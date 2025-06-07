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
    cy.wait(200);
    cy.get('#sign-password').should('be.visible').type(senha);
    cy.wait(200);
  }

  confirmarCadastro() {
    cy.get('button[onclick="register()"]').click();
  }

  realizarCadastro(usuario, senha) {
    this.abrirModalCadastro();
    this.preencherCadastro(usuario, senha);
    cy.wait(200);
    this.confirmarCadastro();
  }

  preencherLogin(usuario, senha) {
    cy.get('#loginusername').should('be.visible').type(usuario);
    cy.wait(200);
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

  selecionarProduto(nomeProduto) {
    // Clica no link do produto baseado no texto e na classe hrefch
    cy.get('a.hrefch').contains(nomeProduto).click();
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

  preencherCheckout(nome, pais, cidade, cartao, mes, ano) {
  cy.get('#name').should('be.visible').type(nome);
  cy.wait(200);
  cy.get('#country').should('be.visible').type(pais);
  cy.wait(200);
  cy.get('#city').should('be.visible').type(cidade);
  cy.get('#card').should('be.visible').type(cartao);
  cy.get('#month').should('be.visible').type(mes);
  cy.get('#year').should('be.visible').type(ano);
  cy.get('button[onclick="purchaseOrder()"]').click();
}

validarConfirmacao() {
  cy.get('.sweet-alert.showSweetAlert.visible h2')
    .should('be.visible')
    .and('contain.text', 'Thank you for your purchase!');
  cy.get('.confirm.btn.btn-lg.btn-primary').click();
}

}

export default new TelaPage();
