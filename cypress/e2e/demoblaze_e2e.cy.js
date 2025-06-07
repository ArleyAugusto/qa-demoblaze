/**Teste automatizado */
import { randomUsername, randomPassword } from '../support/utils/gerarData';
import telaPage from '../support/pageObjects/tela.page';

describe('Fluxo completo Demoblaze - Cadastro até Checkout', () => {
  const usuario = randomUsername();
  const senha = randomPassword(usuario);

  it('Fluxo completo: cadastro, login, escolha de produto, carrinho, finalização e checkout', () => {
    cy.visit('https://www.demoblaze.com/');

    telaPage.realizarCadastro(usuario, senha);
    telaPage.realizarLogin(usuario, senha);
    telaPage.selecionarProduto('Samsung galaxy s6')
    telaPage.adicionarProdutoAoCarrinho();
    telaPage.acessarCarrinho();
    telaPage.abrirCheckout();
    telaPage.preencherCheckout('Arley', 'Brasil', 'São Paulo', '1234567812345678', '12', '2025');
    telaPage.validarConfirmacao();
  });
});