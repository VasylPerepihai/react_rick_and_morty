Rick and Morty test task

Before you read the description please take a look at the APIs that you will work with:
https://rickandmortyapi.com/documentation/#introduction
Task Description
The goal of the task is to create a react web application that will display the all the information about the Rick
and Morty Tv series. It Should have 2 tabs in the navigation panel: Characters, Episodes.
● The Characters page should have a list of all characters that are in the tv series (Please implement a
pagination for that. So that there are 10-character cards per page). The list should have a filter by
“species”, “status”, “gender” fields. The character card should have a character picture (if any), and
some additional info about that character (your choice). When you click on the character card – the
popup should be opened where will be all character info.
● The episode page should be really similar to the character page, the episodes should have filter by
“name” field (if you will have inspiration, please add other filters). As there is no image in episodes,
please make this not a list but table, also there should be 25 episodes per page(pagination).


Technical description
Here is the list of apis that you will need - https://rickandmortyapi.com/documentation/#introduction
For this task please use the following:
● React js
● React-redux/context (optional)
● Typescript ( optional)
● Material UI - https://material-ui.com/ for all popups, buttons etc. (Or use any other ui library, optional)
● Scss/CSS
There is no design for this task, So it is also up to you, but the design should look good and user friendly.
For API calls use fetch.
Please create as decomposed components as possible. And try to reuse them as much as possible.
The code architecture should be logically correct. There should be a separate folder for each page, small
components should be separated from the big ones. For Shared components create a folder UI and store them
there (The components from the episodes page should only be used in the episodes folder).
Good luck!
