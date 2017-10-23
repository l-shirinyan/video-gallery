import routing from './album.route';
import albumMainController from './controllers/albumMain.controller.js';
import albumDetailController from './controllers/albumDetail.controller.js';
import albumDataService from './service/albumDataService.js';
import trustedFilter from './filters/trustedFilter.js';

angular
  .module('album', [])
  .factory('albumDataService',albumDataService)
  .controller('albumMainController',albumMainController)
  .controller('albumDetailController',albumDetailController)
  .filter('trustedFilter',trustedFilter)
  .config(routing);