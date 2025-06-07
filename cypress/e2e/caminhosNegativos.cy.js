import { randomUsername, randomPassword } from '../support/utils/gerarData';
import telaPage from '../support/pageObjects/tela.page';

describe('Testes negativos Demoblaze', () => {
  const usuario = randomUsername();
  const senha = randomPassword();

  beforeEach(() => {
    telaPage.visitarSite();
  });

  it('CT016 - Cadastro com usuário já existente', () => {
    telaPage.realizarCadastro(usuario, senha);
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Sign up successful.');
    });

    cy.reload();

    telaPage.realizarCadastro(usuario, senha);
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('This user already exist.');
    });
  });

  it('CT017 - Cadastro com campo de usuário vazio', () => {
    telaPage.abrirModalCadastro();
    cy.get('#sign-password').should('be.visible').type(senha);
    telaPage.confirmarCadastro();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Please fill out Username and Password.');
    });
  });

  it('CT018 - Cadastro com campo de senha vazio', () => {
    telaPage.abrirModalCadastro();
    cy.get('#sign-username').should('be.visible').type(usuario);
    telaPage.confirmarCadastro();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Please fill out Username and Password.');
    });
  });

  it('CT021 - Login com usuário inexistente', () => {
    telaPage.realizarLogin('usuarioFalso', 'senha123');
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('User does not exist.');
    });
  });

  it('CT023 - Login com campo de usuário vazio', () => {
    telaPage.preencherSomenteSenha('senhaQualquer');
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Please fill out Username and Password.');
    });
  });

  it('CT024 - Login com campo senha vazio', () => {
    telaPage.preencherSomenteUsuario('usuarioQualquer');
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Please fill out Username and Password.');
    });
  });

});