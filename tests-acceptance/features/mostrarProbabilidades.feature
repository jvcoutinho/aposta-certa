Feature: Probabilidades de jogos
As a gambler using the system
I want to see the win probabilities of the teams facing each other in a game
So that I can choose a proper option to bet

Scenario: Visualizando as probabilidades em um jogo
Given I'm at "Concurso" page
Given "DINAMARCA" has "50%" win probability calculated
Given "AUSTRÁLIA" has "32%" win probability calculated
When I request the field "DINAMARCA" vs "AUSTRÁLIA" 
Then I can see "50%" attached to "DINAMARCA"
Then I can see "18%" attached to "AUSTRÁLIA"

Scenario: Cálculo da probabilidade de vitória
Given the system has "Corinthians" "vs" "Flamengo" field
Given the system has “Corinthians” informations storaged
Given the system has “Flamengo” informations storaged
When the field "Corinthians" "vs" "Flamengo" is requested
Then the system calculates the win probability "55%" of  "Corinthians" 
Then attach "55%" to "Corinthians"
Then the system calculates the win probability "45%" of  "Flamengo" 
Then attach "45%" to "Flamengo"

Scenario: Probabilidades correspondem ao jogo
Given I'm at "Concurso" page
Given "DINAMARCA" has "49%" win probability calculated
Given "AUSTRÁLIA" has "17%" win probability calculated
Given "ARGENTINA" has "69%" win probability calculated
Given "CROÁCIA" has "20%" win probability calculated
When I request the field "DINAMARCA" vs "AUSTRÁLIA" 
Then I can not see "69%" attached to "DINAMARCA"  
Then I can not see "20%" attached to "AUSTRÁLIA"

Scenario: Cálculo da probabilidade para os times correspondentes
Given the system has "Corinthians" "vs" "Flamengo" field
Given the system has “Palmeiras” “vs” “Grêmio” field
When the field "Corinthians" "vs" "Flamengo" is requested
Then the system does not show "40%" attached to "Palmeiras"  
Then the system does not show "60%" attached to "Grêmio"
