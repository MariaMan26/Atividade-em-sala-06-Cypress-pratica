describe('Validação página de cadastro', () => {
    const LOGIN_URL = 'http://127.0.0.1:5500/Atividade06/cadastro.html' //corrigir para o respectivo diretório local
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


    //TESTES DO JAVA SCRIPT

    //Variáveis para teste do JS
    const nomeCerto = "Caio";
    const emailErrado = "a";
    const emailCerto = "exemplo@gmail.com";
    const usuarioCerto = "Caio123";
    const senhaCurta = "1234";
    const senhaCerta = "12345678";
    const senhaCerta2 = "87654321";

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

    //Testa se aparecer uma mensagem na tela informando que o email é inválido
    it('Exibir erro se email for inválido', () => {
        // Garante que todos os campos estão vazios
        cy.get('#nome').clear()
        cy.get('#email').clear()
        cy.get('#usuario').clear()
        cy.get('#senha').clear()
        cy.get('#confirmaSenha').clear()
        
        // Preenche todos corretamente, exceto o #email, que envia um email inválido
        cy.get('#nome').type(nomeCerto)
        cy.get('#email').type(emailErrado)
        cy.get('#usuario').type(usuarioCerto)
        cy.get('#senha').type(senhaCerta)
        cy.get('#confirmaSenha').type(senhaCerta)  

        // Clicar no botão cadastrar
        cy.get('#btnCadastrar').click()

        // Validar a mensagem de erro
        cy.get('#mensagem')
            .should('be.visible')
            .and('have.class', 'erro')
            .and('contain', 'Erro: Por favor, insira um endereço de e-mail válido.')
    })


    it('Retornar erro se a senha tiver menos que 8 caracteres', ()=>{
        // Garante que todos os campos estão vazios
        cy.get('#nome').clear()
        cy.get('#email').clear()
        cy.get('#usuario').clear()
        cy.get('#senha').clear()
        cy.get('#confirmaSenha').clear()
        
        // Preenche todos corretamente, no entanto a senha tem menos caracteres do que o requisitado
        cy.get('#nome').type(nomeCerto)
        cy.get('#email').type(emailCerto)
        cy.get('#usuario').type(usuarioCerto)
        cy.get('#senha').type(senhaCurta)
        cy.get('#confirmaSenha').type(senhaCurta)  

        // Clicar no botão cadastrar
        cy.get('#btnCadastrar').click()

        // Validar a mensagem de erro
        cy.get('#mensagem')
            .should('be.visible')
            .and('have.class', 'erro')
            .and('contain', 'Erro: A senha deve ter pelo menos 8 dígitos.')
    
    })

    it('Retornar erro se as senhas forem diferentes', ()=>{
        // Garante que todos os campos estão vazios
        cy.get('#nome').clear()
        cy.get('#email').clear()
        cy.get('#usuario').clear()
        cy.get('#senha').clear()
        cy.get('#confirmaSenha').clear()
        
        // Preenche todos corretamente, porém envia duas senhas (que atendem ao requesito mínimo de caracteres) diferentes
        cy.get('#nome').type(nomeCerto)
        cy.get('#email').type(emailCerto)
        cy.get('#usuario').type(usuarioCerto)
        cy.get('#senha').type(senhaCerta) // senha 1
        cy.get('#confirmaSenha').type(senhaCerta2)  // senha 2

        // Clicar no botão cadastrar
        cy.get('#btnCadastrar').click()

        // Validar a mensagem de erro
        cy.get('#mensagem')
            .should('be.visible')
            .and('have.class', 'erro')
            .and('contain', 'Erro: As senhas não coincidem.')
    
    })

    it('Exibir erro se EMAIL estiver vazio', () => {
        
        // Garante que todos os campos estão vazios
        cy.get('#nome').clear()
        cy.get('#email').clear()
        cy.get('#usuario').clear()
        cy.get('#senha').clear()
        cy.get('#confirmaSenha').clear()
        
        // Preenche todos corretamente 
        cy.get('#nome').type(nomeCerto)
        cy.get('#email').type(emailCerto)
        cy.get('#usuario').type(usuarioCerto)
        cy.get('#senha').type(senhaCerta)
        cy.get('#confirmaSenha').type(senhaCerta)  

        // Clicar no botão cadastrar
        cy.get('#btnCadastrar').click()

        // Validar a mensagem de sucesso
        cy.get('#mensagem')
            .should('be.visible')
            .and('have.class', 'sucesso')
            .and('contain', 'Cadastro realizado com sucesso!')

    })

})

