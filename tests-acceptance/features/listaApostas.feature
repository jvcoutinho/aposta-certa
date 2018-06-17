Feature: busca por apostas na Loteca
As a gambler, 
I want to get the currently running bets,
so that I can see what I can bet.

Scenario: ordenar crescentemente a lista por data dos jogos
Given I'm at "Concurso" page
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3f5b871... [#4] Testes de aceitacao da ordenacao de apostas
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
<<<<<<< HEAD
=======
Given "BRASIL" versus "COSTA RICA" is on the list of bets
Given "BRASIL" versus "COSTA RICA" will happen "SEXTA-FEIRA"
Given "BÉLGICA" versus "TUNÍSIA" is on the list of bets 
Given "BÉLGICA" versus "TUNÍSIA" will happen "SÁBADO"
When I sort the list by date
Then I see "BRASIL" versus "COSTA RICA" before "BÉLGICA" versus "TUNÍSIA" on the list

Scenario: alerta de acúmulo de aposta
Given I'm at "Concurso" page	
Given The prize has not accumulated for more than R$ 1.000.000,00
When I see the estimated prize section
Then I don't see an "ACUMULOU!" alert
>>>>>>> f5c3c379dd07b09f3660db36d3cd5adba0761086
=======
>>>>>>> 3f5b871... [#4] Testes de aceitacao da ordenacao de apostas
