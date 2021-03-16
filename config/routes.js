/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'GET /': { action: 'view-homepage' },
  // login
  'GET /login': { action: 'entrance/view-login' },
  'POST /login': { action: 'entrance/login' },
  // movies
  'GET /movies': { action: 'content/movies' },
  'GET /kidsmovies': { action: 'content/kidsmovies' },
  'GET /title/:id': { action: 'content/movie-detail' },

  // TODO
  // POST /payment
  'GET /payment': { action: 'account/view-payment' },
  'GET /play': { action: 'account/view-movie' },
  'GET /faq': { view: 'pages/faq' },
  'GET /chat': { view: 'pages/chat' },




  // 'GET /movie': { action: 'content/movieDetail' },
  // signup
  'GET /signup': { action: 'entrance/view-signup' },
  'POST /signup': { action: 'entrance/signup' },
  // logout
  'GET /logout': { action: 'account/logout' }


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
