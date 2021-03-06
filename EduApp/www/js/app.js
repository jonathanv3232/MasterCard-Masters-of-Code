// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ionic.contrib.ui.cards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.facts', {
      url: "/facts",
      views: {
        'tab-dash': {
          templateUrl: "templates/view-facts.html",
          controller: 'ChatsCtrl'
        }
      }
    })
    
     .state('tab.facts1', {
       url: '/facts/:chatId/:amt',
      views: {
        'tab-dash': {
          templateUrl: "templates/chat-detail.html",
          controller: 'ChatDetailCtrl'
        }
      }
    })
    
     .state('tab.eduset', {
       url: '/facts/:chatId',
      views: {
        'tab-dash': {
          templateUrl: "templates/tab-account.html",
          controller: 'ChatDetailCtrl'
        }
      }
    })
    
    
    .state('tab.questions', {
       url: '/questions/:sessionId',
      views: {
        'tab-dash': {
          templateUrl: "templates/view-questions.html",
          controller: 'CardsCtrl'
        }
      }
    })
    
    .state('tab.endquestions', {
       url: '/questions/end',
      views: {
        'tab-dash': {
          templateUrl: "templates/question-end.html",
          controller: 'EndQuestionsCtrl'
        }
      }
    })

  .state('tab.cards', {
      url: '/cards',
      views: {
        'tab-cards': {
          templateUrl: 'templates/tab-cards.html'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });
  
  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
