Feature: busca por apostas na Loteca
As a gambler, 
I want to get the currently running bets,
so that I can see what I can bet.

Scenario: ordenar crescentemente a lista por data dos jogos
Given “Flamengo” versus “Botafogo” is on the list of bets
Given “Flamengo” versus “Botafogo” will happen “Saturday”
Given “Sport” versus “Grêmio” is on the list of bets 
Given “Sport” versus “Grêmio” will happen “Sunday”
When I sort the list by date
Then I see “Flamengo” versus “Botafogo” before “Sport” versus “Grêmio” on the list

Scenario: alerta de acúmulo de aposta	
Given The prize has accumulated for more than “R$ 1.000.000”
When I go to “Concurso” page
Then I see an “Acumulated!” alert
