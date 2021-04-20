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
3. choose questions (countries) from same continent to make it harder to guess
4. remember selections on reload (check savvy-vuegram)
5. update streak record based on category selected and not as ALL
6. show loading spinner while waiting for the next question
9. Check countries: 
  > Palestine, State of
  > Saint Martin (French part) => French Saint Martin or just Saint Martin
  > Sint Maarten (Dutch part)
  > Tanzania, United Republic of
11. Don't allow same flags to repeat after at least an x amount of times.
13. move randInt() to a helper mixin
14. QUIZ_CHOICES move to a config constants file
15. move await EventService.fetchData() to store
16. Add json cities by country to make it harder to guess
17. Remove bootstrap, jquery and popper to make the app lighter
20. Rename the flags names to make it harder for the user to cheat by inspecting the code
21. select a category (a hint shows ie. Europe), switch category: hint should change according to the new region
22. Add levels - easy to hard
23. Add functionality to play a point score or streak game
24. Limit the number of countries per game (to 30) instead of infinite
25. Allow countries without capital when the category is flags only  (Bouvet Island: Bouvetøya  (Norwegian), Antartctica)
26. Handle no access to api and to empty local storage
27. Jest specs
28. Replace the switch with a hint (bulb) icon
29. Display a different hint when ie region is Africa and hint: This country is in Africa
30. Combine regular expressions in the strings utils file
31. pay auto vs next button
