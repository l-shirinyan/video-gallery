import mainHtml from '../views/main.html';
import albumDetailHtml from '../views/albumDetail.html';


function routes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/main');
  $stateProvider
    .state('main', {
      url: '/main',
      template: mainHtml,
  		controller: 'albumMainController'
    })
    .state('albumDetail', {
      	url: '/albumDetail',
      	template: albumDetailHtml,
  		controller: 'albumDetailController'
    })
}

/* @ngInject */
export default routes;