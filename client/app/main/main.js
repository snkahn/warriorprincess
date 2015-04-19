'use strict';

angular.module('warriorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/recommender.html',
        controller: 'MainCtrl'
      });
  });
