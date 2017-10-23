# Algos-Frontend

The frontend app is made with Angular 4.2 using @angular/cli 1.4.9. The only dependency used in the product is   "@angular/material": "^2.0.0-beta.12" for the material design components in the app.

### To run the project locally 

`cd algos-frontend && npm install && ng serve`

Now this runs on the default angular-cli port 4200. http://localhost:4200
## Algo1 - Frequently occuring words in a file

The SPA has a single input field to enter the "number of entries that are to be retrieved" along with 2 options either to   
  * Retrieve the data realtime from the file and provide the result. [Get the output]
  * Retrieve the data from cached data using Redis. [Get the output faster with Redis]

Note : "Where" and "where" are treated as different. ie. The program is case-sensitive.

![alt screenshot-1](https://raw.githubusercontent.com/kunalpanchal/algos-frontend/master/extras/screenshots/scr-1.png)

  
