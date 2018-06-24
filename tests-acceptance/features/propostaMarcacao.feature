Feature: Propor uma marcação de aposta
As a apostador
I want to ver uma proposta de marcação de aposta
So that Eu otimize a minha aposta

Scenario: Ver proposta de aposta simples
Given Eu estou na página "Apostas"
Given Terá o jogo "Ceará-CE" contra "Palmeiras-SP"
Given A probabilidade de vitória do mandante "Ceará-CE" é "15%"
Given A probabilidade de vitória do visitante "Palmeiras-SP" é "69%"
Given A probabilidade de empate é "16%"
When Eu solicito para "Propor marcação"
Then Eu vejo a proposta de aposta "simples" para "vitória do Palmeiras-SP"

Scenario: Ver proposta de aposta simples
Given Eu estou na página "Apostas"
Given Terá o jogo "Sport-PE" contra "Bahia-BA"
Given A probabilidade de vitória do mandante "Sport-PE" é "68%"
Given A probabilidade de vitória do visitante "Bahia-BA" é "21%"
Given A probabilidade de empate é "11%"
When Eu solicito para "Propor marcação" 
Then Eu vejo a proposta de aposta "simples" para "vitória do Sport-PE"

Scenario: Ver proposta de aposta simples
Given Eu estou na página "Apostas"
Given Terá o jogo "Náutico-PE" contra "Santa Cruz-PE"
Given A probabilidade de vitória do mandante "Náutico-PE" é "27%"
Given A probabilidade de vitória do visitante "Santa Cruz-PE" é "24%"
Given A probabilidade de empate é "49%"
When Eu solicito para "Propor marcação" 
Then Eu vejo a proposta de aposta "simples" para "empate"


Scenario: Ver proposta de aposta dupla
Given Eu estou na página "Apostas"
Given Terá o jogo "São bento-SP" contra "Fortaleza-CE"
Given A probabilidade de vitória do mandante "São bento-SP" é "13%"
Given A probabilidade de vitória do visitante "Fortaleza-CE" é "40%"
Given A probabilidade de empate é "37%"
When Eu solicito para "Propor marcação" 
Then Eu vejo a proposta de aposta "dupla" para "vitória do Fortaleza-CE" e "empate"

Scenario: Ver proposta de aposta dupla
Given Eu estou na página "Apostas"
Given Terá o jogo "São Caetano-SP" contra "Salgueiro-PE"
Given A probabilidade de vitória do mandante "São Caetano-SP" é "47%"
Given A probabilidade de vitória do visitante "Salgueiro-PE" é "14%"
Given A probabilidade de empate é "39%"
When Eu solicito para "Propor marcação" 
Then Eu vejo a proposta de aposta "dupla" para "vitória do São Caetano-SP" e "empate"

Scenario: Ver proposta de aposta dupla
Given Eu estou na página "Apostas"
Given Terá o jogo "São Paulo-SP" contra "Botafogo-RJ"
Given A probabilidade de vitória do mandante "São Paulo-SP" é "39%"
Given A probabilidade de vitória do visitante "Botafogo-RJ" é "43%"
Given A probabilidade de empate é "18%"
When Eu solicito para "Propor marcação" 
Then Eu vejo a proposta de aposta "dupla" para "vitória do São Paulo-SP" e "vitória do Botafogo-RJ"

Scenario: Ver proposta de aposta tripla
Given Eu estou na página "Apostas"
Given Terá o jogo "CSA-AL" contra "CRB-AL"
Given A probabilidade de vitória do mandante "CSA-AL" é "33%"
Given A probabilidade de vitória do visitante "CRB-AL" é "31%"
Given A probabilidade de empate é "36%"
When Eu solicito para "Propor marcação" 
Then Eu vejo a proposta de aposta "tripla" para "vitória do CSA-AL", "empate"  e "vitória do CRB-AL"

Scenario: Ver valor da proposta
Given Eu estou na página "Propostas"
Given Está proposto aposta "tripla" para primeiro jogo
Given Está proposto aposta "dupla" para segundo jogo
Given Está proposto aposta "simples"  para terceiro jogo
Given Está proposto aposta "simples" para quarto jogo
Given Está proposto aposta "simples" para quinto jogo
Given Está proposto aposta "dupla" para sexto jogo
Given Está proposto aposta "dupla" para sétimo jogo
Given Está proposto aposta "simples" para oitavo jogo
Given Está proposto aposta "simples" para nono jogo
Given Está proposto aposta "simples" para décimo jogo
Given Está proposto aposta "simples" para décimo primeiro jogo
Given Está proposto aposta "simples" para décimo segundo jogo
Given Está proposto aposta "simples" para décimo terceiro jogo
Given Está proposto aposta "simples" para décimo quarto jogo
When Eu solicito para ver valor da aposta 
Then Eu vejo o valor da aposta "24 reais"

Scenario:  Propor uma aposta simples de jogo com probabilidade igual
Given Terá o jogo "Ceará-CE" contra "Palmeiras-SP"
Given A probabilidade de vitória do mandante "Ceará-CE" é "35%"
Given A probabilidade de vitória do visitante "Palmeiras-SP" é "35%"
Given A probabilidade de empate é "30%"
Then O sistema propõe que aposte "simples" para "vitória do Ceará-CE"


Scenario: Ver proposta de aposta simples com probabilidade igual
Given Eu estou na página "Apostas"
Given Terá o jogo "Grêmio-RS" contra "Náutico-PE"
Given A probabilidade de vitória do mandante "Grêmio-RS" é "35%"
Given A probabilidade de vitória do visitante "Náutico-PE" é "35%"
Given A probabilidade de empate é "30%"
When Eu solicito para "Propor marcação"
Then Vejo a proposta de aposta "simples" para "vitória do Grêmio-RS"
    