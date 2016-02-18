/**
* Posts
* @namespace social_test.posts.directives
*/
(function() {
	'use strict';

	angular
		.module("social_test.posts.directives")
		.directive('posts', posts);

	/**
	* @namespace Posts
	*/
	function posts() {
		/**
		* @name directive
		* @desc The directive to be returned
		* @memberOf social_test.posts.directives.Posts
		*/
		var directive = {
			controller: 'PostsController',
			controllerAs: 'vm',
			restrict: 'E',
			scope : {
				posts: '='
			},
			templateUrl: '/static/templates/posts/posts.html'
		};

		return directive;
	}
})();

