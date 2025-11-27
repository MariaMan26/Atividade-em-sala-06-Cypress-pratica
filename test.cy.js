describe('Validação página de cadastro', () => {
    const LOGIN_URL = 'http://127.0.0.1:5500/A04/cadastro.html'
    beforeEach(() => {
        cy.visit(LOGIN_URL)
    })
    it('Validar elementos visuais estáticos e itens do form', () => {
        //Valida título da págine
        cy.title().should('eq', 'Formulário de Cadastro Simples')

        //Valida título da página de cadastro
        cy.get('.container h2').should('be.visible').and('contain', 'Cadastro de Usuário')

        //Valida elementos principais do form
        cy.get('.form-group, #btnCadastrar').as('formcadastro')
        cy.get('@formcadastro')
            .should('be.visible') // Deve estar visível
            .and('have.value', '') // Deve estar vazio inicialmente
            .and('not.be.disabled') // Não deve estar desabilitado

        //Valida nome de cada input/botão do form
        cy.get('label[for="nome"]').should('contain', 'Nome:')
        cy.get('label[for="email"]').should('contain', 'Email:')
        cy.get('label[for="usuario"]').should('contain', 'Usuário:')
        cy.get('label[for="senha"]').should('contain', 'Senha (mín. 8 dígitos):')
        cy.get('label[for="confirmaSenha"]').should('contain', 'Confirmar Senha:')
        cy.get('#btnCadastrar').should('be.visible').and('contain', 'Cadastrar')
    })

    it('Validar elementos visuais estáticos e itens do form', () => {
        //Valida título da págine
        cy.title().should('eq', 'Formulário de Cadastro Simples')

        //Valida título da página de cadastro
        cy.get('.container h2').should('be.visible').and('contain', 'Cadastro de Usuário')

        //Valida elementos principais do form
        cy.get('.form-group, #btnCadastrar').as('formcadastro')
        cy.get('@formcadastro')
            .should('be.visible') // Deve estar visível
            .and('have.value', '') // Deve estar vazio inicialmente
            .and('not.be.disabled') // Não deve estar desabilitado

        //Valida nome de cada input/botão do form
        cy.get('label[for="nome"]').should('contain', 'Nome:')
        cy.get('label[for="email"]').should('contain', 'Email:')
        cy.get('label[for="usuario"]').should('contain', 'Usuário:')
        cy.get('label[for="senha"]').should('contain', 'Senha (mín. 8 dígitos):')
        cy.get('label[for="confirmaSenha"]').should('contain', 'Confirmar Senha:')
        cy.get('#btnCadastrar').should('be.visible').and('contain', 'Cadastrar')
    })

    //TESTES DO JAVA SCRIPT
    const nomeErrado = null;
    const nomeCerto = "Caio";
    const emailErrado = "a";
    const emailCerto = "exemplo@gmail.com";
    const usuarioErrado = null;
    const usuarioCerto = "Caio123";
    const senhaErrada = "1234";
    const senhaCerta = "12345678";

    //Valida se o sistema reconhece que todos os campos estão vazios
    it('Teste de campo vazio', () => {

    // Garante que todos os campos estão vazios
    cy.get('#nome').clear()
    cy.get('#email').clear()
    cy.get('#usuario').clear()
    cy.get('#senha').clear()
    cy.get('#confirmaSenha').clear()   

    // Clicar no botão cadastrar
    cy.get('#btnCadastrar').click()

    // Validar a mensagem de erro
    cy.get('#mensagem')
        .should('be.visible')
        .and('have.class', 'erro')
        .and('contain', 'Erro: Por favor, preencha todos os campos.')

    })

    //Testa se é gerado a mensagem de carro caso o input nome esteja vazio
    it('Exibir erro se NOME estiver vazio', () => {
    
    // Garante que todos os campos estão vazios
    cy.get('#nome').clear()
    cy.get('#email').clear()
    cy.get('#usuario').clear()
    cy.get('#senha').clear()
    cy.get('#confirmaSenha').clear()
    
    // Preenche todos e apaga nome depois
    cy.get('#nome').type(nomeCerto)
    cy.get('#email').type(emailCerto)
    cy.get('#usuario').type(usuarioCerto)
    cy.get('#senha').type(senhaCerta)
    cy.get('#confirmaSenha').type(senhaCerta)  
    cy.get('#nome').clear()    

    // Clica no botão cadastrar
    cy.get('#btnCadastrar').click()

    // Valida a mensagem de erro
    cy.get('#mensagem')
        .should('be.visible')
        .and('have.class', 'erro')
        .and('contain', 'Erro: Por favor, preencha todos os campos.')

    })

    //Testa se é gerado a mensagem de carro caso o input email esteja vazio e os demais preenchidos
    it('Exibir erro se EMAIL estiver vazio', () => {
    
    // Garante que todos os campos estão vazios
    cy.get('#nome').clear()
    cy.get('#email').clear()
    cy.get('#usuario').clear()
    cy.get('#senha').clear()
    cy.get('#confirmaSenha').clear()
    
    // Preenche todos e apaga email depois
    cy.get('#nome').type(nomeCerto)
    cy.get('#email').type(emailCerto)
    cy.get('#usuario').type(usuarioCerto)
    cy.get('#senha').type(senhaCerta)
    cy.get('#confirmaSenha').type(senhaCerta)  
    cy.get('#email').clear()    

    // Clicar no botão cadastrar
    cy.get('#btnCadastrar').click()

    // Validar a mensagem de erro
    cy.get('#mensagem')
        .should('be.visible')
        .and('have.class', 'erro')
        .and('contain', 'Erro: Por favor, preencha todos os campos.')

    })

    //Testa se é gerado a mensagem de carro caso o input USUARIO esteja vazio e os demais preenchidos
    it('Exibir erro se USUARIO estiver vazio', () => {
    
    // Garante que todos os campos estão vazios
    cy.get('#nome').clear()
    cy.get('#email').clear()
    cy.get('#usuario').clear()
    cy.get('#senha').clear()
    cy.get('#confirmaSenha').clear()
    
    // Preenche todos e apaga usuario depois
    cy.get('#nome').type(nomeCerto)
    cy.get('#email').type(emailCerto)
    cy.get('#usuario').type(usuarioCerto)
    cy.get('#senha').type(senhaCerta)
    cy.get('#confirmaSenha').type(senhaCerta)  
    cy.get('#usuario').clear()    

    // Clicar no botão cadastrar
    cy.get('#btnCadastrar').click()

    // Validar a mensagem de erro
    cy.get('#mensagem')
        .should('be.visible')
        .and('have.class', 'erro')
        .and('contain', 'Erro: Por favor, preencha todos os campos.')

    })

    //Testa se é gerado a mensagem de carro caso o input SENHA esteja vazio e os demais preenchidos
    it('Exibir erro se SENHA estiver vazio', () => {
    
    // Garante que todos os campos estão vazios
    cy.get('#nome').clear()
    cy.get('#email').clear()
    cy.get('#usuario').clear()
    cy.get('#senha').clear()
    cy.get('#confirmaSenha').clear()
    
    // Preenche todos e apaga senha depois
    cy.get('#nome').type(nomeCerto)
    cy.get('#email').type(emailCerto)
    cy.get('#usuario').type(usuarioCerto)
    cy.get('#senha').type(senhaCerta)
    cy.get('#confirmaSenha').type(senhaCerta)  
    cy.get('#senha').clear()    

    // Clicar no botão cadastrar
    cy.get('#btnCadastrar').click()

    // Validar a mensagem de erro
    cy.get('#mensagem')
        .should('be.visible')
        .and('have.class', 'erro')
        .and('contain', 'Erro: Por favor, preencha todos os campos.')

    })

    //Testa se é gerado a mensagem de carro caso o input confirmaSENHA esteja vazio e os demais preenchidos
    it('Exibir erro se confirmaSENHA estiver vazio', () => {
    
    // Garante que todos os campos estão vazios
    cy.get('#nome').clear()
    cy.get('#email').clear()
    cy.get('#usuario').clear()
    cy.get('#senha').clear()
    cy.get('#confirmaSenha').clear()
    
    // Preenche todos e apaga confirmaSenha depois
    cy.get('#nome').type(nomeCerto)
    cy.get('#email').type(emailCerto)
    cy.get('#usuario').type(usuarioCerto)
    cy.get('#senha').type(senhaCerta)
    cy.get('#confirmaSenha').type(senhaCerta)  
    cy.get('#senha').clear()    

    // Clicar no botão cadastrar
    cy.get('#btnCadastrar').click()

    // Validar a mensagem de erro
    cy.get('#mensagem')
        .should('be.visible')
        .and('have.class', 'erro')
        .and('contain', 'Erro: Por favor, preencha todos os campos.')

    })


})

