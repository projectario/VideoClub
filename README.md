# VideoClub Project

A web MVC project for the PeopleCERT Coding Bootcamp (group project)

### The technologies we used: 

- [Sails v1](https://sailsjs.com)
- [sails-mysql](https://www.npmjs.com/package/sails-mysql) (npm)
- [Sass](https://www.npmjs.com/package/sass)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) (npm)
- [Paypal-Checkout](https://developer.paypal.com/docs/business/develop/design-guidelines/#button-placement)


### How to Install

1. Clone this repository
2. Move to project directoty ```$ cd VideoClub```
3. Install dependences ```$ npm install```
4. On the console type ```$ sails lift``` to start the server
5. On your browser visit [localhost:1337](localhost:1337)


### Scope of functionalities 

The website has two different user roles. The adult user, and the child user.

- The logged in user in authenticated and encrypted with bcrypt, that way even one with access to the database can't see what it is.
Once the user logs in, he/she can have access a list of movies that are available for renting. The user can then click on a movie, and will be redirected
to the movie-detail page that contains the movies' info like, description, price, rating, and the movie trailer. To proceed the user must click
the "Watch Now" button and will be redirected to a checkout page, powered by Paypal. After the payment is confirmed that user is redirected to a page that
contains said movie.

- In the prospect that this can be a subscription for children, the account can be can be kid-friendly. That means that if the user is a child, the account has access ONLY to titles that are either animation, or in the perspective PG rating.
[![kids-account.png](https://i.postimg.cc/6qLsz4Yr/kids-account.png)](https://postimg.cc/rRmYws6s)


### Illustrations

[![Video-Club-homepage.png](https://i.postimg.cc/4NLJ6JpM/Video-Club-homepage.png)](https://postimg.cc/ykR4BCQX)
[![Video-Club-movie-detail.png](https://i.postimg.cc/fRHfQq1p/Video-Club-movie-detail.png)](https://postimg.cc/bZttQgy9)


#### Notes

+ The database is already filled and contains all needed data.
+ To make a mock payment you should have a paypal sandbox user account.

## Contributors
* [Petros Foutsis](https://github.com/PetrosFou)
* [Grigoris Palaiohoritis](https://github.com/GrigorisPs)
* [Anastasia Kounoupi](https://github.com/anastasiakounoupi)
* [Andreas Koutroulis](https://github.com/AndreasCtrl)
* [Nektarios Banousi](https://github.com/BanNektarios)



# MovieClub Project

A group project for the PeopleCERT Coding Bootcamp

### The technologies we used: 

a [Sails v1](https://sailsjs.com) application
a [MySQL](https://www.npmjs.com/package/sails-mysql) application
a [Sass](https://www.npmjs.com/package/sass) application
a [bcryptjs](https://www.npmjs.com/package/bcryptjs) application
a [Paypal-Checkout](https://developer.paypal.com/docs/business/develop/design-guidelines/#button-placement)

