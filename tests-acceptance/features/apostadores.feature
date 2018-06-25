Feature: Cadastro de clientes
As a apostador,
I want to fazer o meu cadastro no sistema, informando meus dados solicitados,
So that possa-se entrar no site para ver as estatísticas de jogos.

Scenario: Fazer cadastro
Given Eu estou na pagina "Cadastro"
When Eu preencho o nome "Victor", preencho o e-mail "vms5@cin.ufpe.br" e a senha com "123456" e solicito o cadastro
Then Vejo na tela de cadastro a seguinte mensagem: "Cadastro feito com sucesso!"

Scenario: Fazer cadastro sem informar nome
Given Eu estou na pagina "Cadastro"
When Eu preencho o nome "", preencho o e-mail "vms5@cin.ufpe.br" e a senha com "123456" e solicito o cadastro
Then Vejo na tela de cadastro a seguinte mensagem: “Informe um nome, por favor!”