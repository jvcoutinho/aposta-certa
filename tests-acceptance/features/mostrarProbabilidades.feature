Feature: Probabilidades de jogos
As a gambler using the system
I want to see the win probabilities of the teams facing each other in a game
So that I can choose a proper option to bet

Scenario: Visualizando as probabilidades em um jogo
Given I am at "system.site"
Given “Corinthians” has “55%” win probability calculated
Given “Flamengo” has “45%” win probability calculated
When I request the field "Corinthians" vs "Flamengo" 
Then I can see "55%" attached to "Corinthians"
Then I can see "45%" attached to "Flamengo"

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
Given I am at "system.site"
Given I see the “Corinthians” “vs” “Flamengo” field
Given I see the “Palmeiras” “vs” “Grêmio” field
When I request the "Corinthians" "vs" "Flamengo" field
Then I can not see "Palmeiras" "vs" "Grêmio" probabilities

Scenario: Cálculo da probabilidade para os times correspondentes
Given the system has "Corinthians" "vs" "Flamengo" field
Given the system has “Palmeiras” “vs” “Grêmio” field
When the field "Corinthians" "vs" "Flamengo" is requested
Then the system does not show "40%" attached to "Palmeiras"  
Then the system does not show "60%" attached to "Grêmio"
