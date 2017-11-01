import angular from 'angular';
import angularRoute from 'angular-route';
import uiRouter from 'angular-ui-router';
//import uiRouterStyles from 'angular-ui-router-styles/ui-router-styles';
//import uiRouterCss from 'angular-ui-router-css/js/angular-ui-router-css';


//import uistyle from 'betsol-ng-ui-router-styles';
import uiRouterStyles from 'angular-ui-router-styles/ui-router-styles';


import ngComponentRouter from 'ngComponentRouter';


//import css from './templates/admin/css/sb-admin.css';

var css = require('./templates/admin/css/sb-admin.css');
//import css from './templates/admin/css/sb-admin.css';

require('../app/services/login/');
require('../app/services/feed/');
require('../app/controllers/feed/');
require('../app/controllers/login/');

//require('../app/vendor/betsol-ng-ui-router-styles/betsol-ng-ui-router-styles.js');

/*
var app = angular.module('readerFeedBody', [angularRoute, uiRouter,'ControllerFeedCRUD', 'ServiceFeedCRUD']);


app.config(function($stateProvider, $urlRouterProvider){



});
*/


var app2 = angular.module('readerFeed', [ 'uiRouterStyles', angularRoute, uiRouter,'ControllerAuthLogin', 'ServiceAuth', 'ControllerFeedCRUD', 'ServiceFeedCRUD']);

app2.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("dashboard");



  $stateProvider.state('root', {
    url: '/',
    templateUrl: "/templates/admin/blank.html",
    data: {
      css: '/templates/admin/css/sb-admin.css'
    }

  });


  $stateProvider.state('home', {
    url: '/home',
    templateUrl:'/templates/home/index.html'

  });



  $stateProvider.state('dashboard', {
    url: 'dashboard',
    parent: 'root',
    views: {
      'listFeed': {
        templateUrl: "/views/dashboard.html",
        controller: "FeedShow"
      }
    }

  });

  $stateProvider.state('create', {
    url: 'create',
    parent: 'root',
    views: {
      'listFeed': {
        templateUrl: "/views/create.html",
        controller: "FeedCreate"
       }
    }

  });


  $stateProvider.state('list', {
    url: 'list',
    parent: 'root',
    views: {
      'listFeed': {
        templateUrl: "/views/list.html",
        controller: "FeedList"
       }
    }

  });



  $stateProvider.state('delete', {
    url: "delete/:id",
    controller: "FeedDelete"
  })




  $stateProvider.state('edit', {
    url: "edit/:id",
    parent: 'root',
    views: {
      'listFeed': {
        templateUrl: "/views/edit.html",
        controller: "FeedEdit"
       }
    }

  });

/*
  $urlRouterProvider.otherwise("/dashboard");

  $stateProvider.state('root', {
      url: '/',
      abstract: true,
      templateUrl: "/templates/admin/blank.html"


  });

  $stateProvider
  .state('root.dashboard', {
    url: "dashboard",
    views: {
      'listFeed': {
        templateUrl: "/views/dashboard.html",
        controller: "FeedShow"
       }
    },
    data: {
        // Single un-named resource defined:
        // Globally for entire application.
        css: './templates/admin/css/sb-admin.css'
      }
  })

  $stateProvider
  .state('root.create', {
    url: "create",
    views: {
      'listFeed': {
        templateUrl: "/views/create.html",
        controller: "FeedCreate"
       }
    }
  })

  $stateProvider
  .state('delete', {
    url: "delete/:id",
    controller: "FeedDelete"
  })

  $stateProvider
  .state('root.edit', {
    url: "edit/:id",
    views: {
      'listFeed': {
        templateUrl: "/views/edit.html",
        controller: "FeedEdit"
       }
    }
  })


  $stateProvider
  .state('root.list', {
    url: "lists",
    views: {
      'listFeed': {
        templateUrl: "/views/list.html",
        controller: "FeedList"
       }
    }
  })



  $stateProvider.state('login', {
      url: '/login',
      templateUrl: "/templates/auth/body.html",
      controller: "LoginValidate"
  });

  $stateProvider.state('recover', {
      url: '/recover',
      templateUrl: "/templates/auth/forgot-password.html"
  });

  $stateProvider.state('register', {
      url: '/register',
      templateUrl: "/templates/auth/register.html"
  });

  $stateProvider.state('home', {
      url: '/home',
      templateUrl: "/templates/home/index.html"
  });
*/

});
