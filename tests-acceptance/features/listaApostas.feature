Feature: busca por apostas na Loteca
As a gambler, 
I want to get the currently running bets,
so that I can see what I can bet.

Scenario: ordenar crescentemente a lista por data dos jogos
Given I'm at "Concurso" page
Given "ESPANHA" versus "MARROCOS" is on the list of bets
Given "ESPANHA" versus "MARROCOS" will happen "SEGUNDA-FEIRA"
Given "DINAMARCA" versus "FRANÇA" is on the list of bets 
Given "DINAMARCA" versus "FRANÇA" will happen "TERÇA-FEIRA"
When I sort the list by date
Then I see "ESPANHA" versus "MARROCOS" before "DINAMARCA" versus "FRANÇA" on the list

Scenario: alerta de acúmulo de aposta
Given I'm at "Concurso" page	
Given The prize has not accumulated for more than R$ 1.000.000,00
When I see the estimated prize section
Then I don't see an "ACUMULOU!" alert