# world-quiz

Capitals of the world

### Description

Test your knowledge of the countries, capitals and flags of the world. This app uses VueJs for the front-end while getting data via a RESTful API.

### Credits

- http://flag-icon-css.lip.is/game/capital/
- https://dev.to/lynnewritescode/my-scss-setup-within-a-vue-cli-3-project-4jan

### REST Countries

https://restcountries.eu/

### Tools

https://www.toptal.com/designers/subtlepatterns/

## TODO: ...
1. show 'no capital' randomly as an answer to make up for countries with no capital like antartica
2. handle choice 'no capital' as a valid answer
3. choose questions (countries) from same continent to make it harder to guess
4. remember selections on reload (check savvy-vuegram)
5. update record based on category selected and not as ALL
6. show loading spinner while waiting for the next question
7. refactor capitals and flags categories (hint(), messageType(), mounted(), checkAnswer())
8. no white border around the nepali flag (reduce height as well)
9. Check countries: Palestine, State of && Saint Martin (French part) => French Saint Martin or just Saint Martin && Sint Maarten (Dutch part)
10. changing to category 'capitals' doesn't show hint (created and mounted show errors)
11. Don't allow same flags to repeat after at least an x amount of times.
12. allow user to enable/disable hints
13. move rand() to a helper mixin
14. QUIZ_CHOICES move to a config file
15. move await EventService.fetchData() to store
16. Add json cities by country to make it harder to guess
17. Remove bootstrap, jquery and popper to make the app lighter
18. Remove countries with no capital when playing the capitals game (Bouvet Island: Bouvetøya  (Norwegian))
19. Hint not showing on first question
20. Rename the flags names to make it harder for the user to cheat by inspecting the code
21. select a category (a hint shows ie. Europe), switch category: hint should change according to the new region
