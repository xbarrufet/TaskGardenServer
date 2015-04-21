// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('serveisDia', {
        url: "/serveis/dia",
        templateUrl: "templates/serveisDia.html",
        controller: 'ServeisCtrl'
    }
  )
  
  .state('serveisSetmana', {
        url: "/serveis/setmana",
        templateUrl: "templates/serveisSetmana.html",
        controller: 'ServeisCtrl'
    }
  )
  .state('serveidetail', {
    url: "/serveis/:serveiId/:modus",
    templateUrl: "templates/serveidetail.html",
    controller: 'ServeisCtrl'
      
  })
  
  .state('crearIncidencia', {
    url: "/serveis/crearIncidencia",
    templateUrl: "templates/crearIncidencia.html",
    controller: 'ServeisCtrl'
      
  })
  
   .state('chat', {
    url: "/serveis/chat",
    templateUrl: "templates/chat.html",
    controller: 'ServeisCtrl'
      
  })
  
   .state('clients', {
    url: "/clients/clientsList",
    templateUrl: "templates/clientsList.html",
    controller: 'ServeisCtrl'
      
  })
  
     .state('xavierbarrufet', {
    url: "/clients/xavierbarrufet",
    templateUrl: "templates/xavierbarrufet.html",
    controller: 'ServeisCtrl'
      
  })
  
  .state('clientsDetail', {
    url: "/clients/detail/:clientCode",
    templateUrl: "templates/clientsDetail.html",
    controller: 'ServeisCtrl'
      
  })
  
  
   .state('serveidetailStart', {
    url: "/serveidetailStart/:serveiId",
    templateUrl: "templates/serveidetailStart.html",
    controller: 'ServeisCtrl'
      
  });
 
    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/serveis/dia');
});
