# 🔍 Projeto de Testes - Demoblaze

Este repositório contém um projeto completo de testes de software no site [Demoblaze](https://www.demoblaze.com/), utilizando **Cypress** para automação de testes e documentação de testes **manuais** em formato Excel. O objetivo é simular cenários reais de uso da aplicação, validando funcionalidades críticas e cobrindo tanto testes positivos quanto negativos.

---

## 🧪 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) para automação de testes
- JavaScript (ES6+)
- Page Object Model (POM)
- Gherkin (para escrita dos casos manuais)
- Excel (para documentação de testes manuais)

---

## 📁 Estrutura do Projeto

```bash
📦 projeto-demoblaze/  
├── cypress/  
│   ├── e2e/  
│   │   ├── caminhosNegativos.cy.js        # Testes negativos  
│   │   └── demoblaze_e2e.cy.js            # Fluxo completo do sistema  
│   ├── support/  
│   │   ├── pageObjects/  
│   │   │   └── tela.page.js               # Classe com métodos reutilizáveis (POM)  
│   │   └── utils/  
│   │       └── gerarData.js               # Funções auxiliares para gerar dados aleatórios  
│   └── evidencias/  
│       └── testes-manuais/                # Prints dos testes manuais  
├── test_case/  
│   ├── manuais/  
│   │   └── Test_Cases_Demoblaze.xlsx      # Casos de testes manuais completos  
│   └── evidencias/                        # Evidências dos testes manuais (prints, vídeos)  
├── README.md  
└── package.json  

✅ Funcionalidades Validadas
🔧 Testes Automatizados
Fluxo Completo (E2E):

Cadastro de usuário

Login

Escolha de produto

Adição ao carrinho

Checkout e validação da compra

Testes Negativos:

Cadastro com usuário existente

Cadastro com campos vazios

Login com usuário inexistente

Login com campos vazios

Os testes automatizados utilizam dados aleatórios para evitar duplicidade e cobrir variações dinâmicas de entrada.

📋 Testes Manuais
Documentados no arquivo Test_Cases_Demoblaze.xlsx, cobrindo:

Menu de Navegação

Filtros por Categoria

Componentes Visuais

Funcionalidade de Contato

Cadastro e Login

Carrinho e Checkout

Cada caso inclui:

Cenário em Gherkin

Critérios de aceite

Prioridade e severidade

Resultado esperado

Status (Aprovado/Reprovado)

Evidência visual (prints)

🖼️ Evidências
As evidências estão organizadas na pasta teste_case/manuais/evidencias com capturas de tela e vídeos dos testes executados, servindo como documentação de apoio.


💼 Autor

Arley
Em transição de carreira para Quality Assurance

📧 [arley.it@icloud.com]
🔗 www.linkedin.com/in/arleyaugusto


📝 Licença
Este projeto é livre para fins educacionais e demonstração profissional.