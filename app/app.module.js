import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngDialog from 'ng-dialog';
import album from './js/album.module';

require('./scss/main.scss');

angular.module('app', [
  uirouter,
  ngDialog,
  'album'
]);
