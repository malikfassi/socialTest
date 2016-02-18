(function () {
	'use strict';

	angular
  		.module('social_test', [
  			'social_test.config',
  			'social_test.routes',
  			'social_test.authentication',
  			'social_test.layout',
  			'social_test.posts',
        'social_test.profiles',
  			'social_test.utils'
  		]);

  	angular.module('social_test.routes', ['ngRoute']);
  	angular.module('social_test.config', []);


  	angular
  		.module('social_test')
  		.run(run);

  	run.$inject=["$http"];

  	/**
  	/* @name run
  	/* @desc Update xsrf $http headers to align with Django's defaults
  	*/
  	function run($http) {
  		$http.defaults.xsrfHeaderName = 'x-CSRFToken';
  		$http.defaults.xsrfCookieName = 'csrftoken';
  	}
})();
