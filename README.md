# world-quiz
Capitals of the world

## Description
Test your knowledge of the countries, capitals and flags of the world. This app uses VueJs for the front-end while getting data via a RESTful API.

http://flag-icon-css.lip.is/game/capital/

## REST Countries
https://restcountries.eu/

## TODO: ...
1. show 'no capital' randomly as an answer to make up for countries with no capital like antartica
2. handle choice 'no capital' as a valid answer
3. choose questions (countries) from same continent to make it harder to guess
4. remember selections on reload (check savvy-vuegram)
5. update record based on category selected and not as ALL
6. show loading flag while waiting
7. refactor capitals and flags categories (hint(), messageType(), mounted(), checkAnswer())
8. no white border around the nepali flag (reduce height as well)
9. formatCountryName - IMPLEMENT (value = "Tanzania, United Republic of")
10. changing to category 'capitals' doesn't show hint (created and mounted show errors)
