Feature: Testes no site pokeapi e gorest

    Background: Executa antes de todos os testes 
        * def url_base_pokemon = 'https://pokeapi.co/api/v2/'
        * def url_base_gorest = 'https://gorest.co.in/public/v2/'
        * def new_user = {name: "James da Salada de Fruta", email: "jamesdafruta@gmail.com", gender: "male", status: "inactive"}
    Scenario: Testa se o pikachu e um pokemon
        Given url url_base_pokemon
        And path 'pokemon/pikachu'
        When method get
        Then status 200
        And match response.name == 'pikachu'
    
    Scenario: Testa se o pokemon Mew e uma especie de planta
        Given url url_base_pokemon
        And path 'berry/mew'
        When method get
        Then status 404

    Scenario: Testa se o efeito de uma master ball e o esperado
        Given url url_base_pokemon
        And path 'item/master-ball'
        When method get
        Then status 200
        And match response.effect_entries[0].short_effect == "Catches a wild Pokémon every time."
    
    Scenario: Testa se Kanto possui uma cidade chama celadon city
        Given url url_base_pokemon
        And path 'region/kanto'
        When method get
        Then status 200
        And match $.locations[*].name contains "celadon-city"

    Scenario: Testa se o usuario ja existe na plataforma
        Given url url_base_gorest
        And path 'users?access-token=xxx'
        And request new_user
        When method post
        Then status 422
