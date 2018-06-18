Feature: busca por apostas na Loteca
As a gambler, 
I want to get the currently running bets,
so that I can see what I can bet.

Scenario: ordenar crescentemente a lista por data dos jogos
Given I'm at "Concurso" page
Given "BRASIL" versus "SUÍÇA" is on the list of bets
Given "BRASIL" versus "SUÍÇA" will happen "DOMINGO"
Given "PORTUGAL" versus "ESPANHA" is on the list of bets 
Given "PORTUGAL" versus "ESPANHA" will happen "SEXTA-FEIRA"
When I sort the list by date
Then I see "PORTUGAL" versus "ESPANHA" before "BRASIL" versus "SUÍÇA" on the list

Scenario: alerta de acúmulo de aposta	
Given The prize has accumulated for more than "R$ 1.000.000"
When I go to "Concurso" page
Then I see an "Acumulated!" alert
