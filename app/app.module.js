import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import ngDialog from 'ng-dialog';
import album from './js/album.module';

require('./scss/main.scss');

angular.module('app', [
  uirouter,
  ngDialog,
  'album'
]);
