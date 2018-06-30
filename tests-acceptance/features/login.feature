Feature: Login de apostador
As a apostador,
I want to fazer o meu login no sistema, informando meus dados solicitados,
So that possa-se entrar no site para ver as estatísticas de jogos.

Scenario: Fazer login
Given Eu estou na pagina "login" e já fiz o cadastro com nome "Victor", e-mail "vms5@cin.ufpe.br" e senha "123456"
When Eu preencho o e-mail "vms5@cin.ufpe.br" e a senha com "123456" e solicito o login
Then Vejo na tela de login a seguinte mensagem: "O usuario entrou!"

Scenario: Fazer login com senha incorreta
Given Eu estou na pagina "login" e já fiz o cadastro com nome "Victor", e-mail "vms5@cin.ufpe.br" e senha "123456"
When Eu preencho o e-mail "vms5@cin.ufpe.br" e a senha com "545642" e solicito o login
Then Vejo na tela de login a seguinte mensagem: "Senha incorreta!"