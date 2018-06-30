Feature: Probabilidades de jogos
As a gambler using the system
I want to see the win probabilities of the teams facing each other in a game
So that I can choose a proper option to bet

Scenario: Visualizando as probabilidades em um jogo
Given I'm at "Concurso" page
Given "DINAMARCA" has "79%" win probability calculated
Given "FRANÇA" has "7%" win probability calculated
When I request the field "DINAMARCA" vs "FRANÇA" 
Then I can see "79%" attached to "DINAMARCA"
Then I can see "7%" attached to "FRANÇA"

Scenario: Probabilidades correspondem ao jogo
Given I'm at "Concurso" page
Given "DINAMARCA" has "3%" win probability calculated
Given "FRANÇA" has "37%" win probability calculated
Given "AUSTRÁLIA" has "27%" win probability calculated
Given "PERU" has "67%" win probability calculated
When I request the field "DINAMARCA" vs "AUSTRÁLIA" 
Then I can not see "27%" attached to "DINAMARCA"  
Then I can not see "67%" attached to "AUSTRÁLIA"
