/**
* Post
* @namespace social_test.posts.directives
*/
(function() {
	'use strict';

	angular
		.module('social_test.posts.directives')
		.directive('post', post);

	/**
	* @namespace Post
	*/
	function post(){
		/**
		* @name directive
		* @desc The directive to be returned
		* @memberOf social_test.posts.directives.Post
		*/
		var directive = {
			restrict: 'E',
			scope: {
				post: '='
			},
			templateUrl: '/static/templates/posts/post.html'
		};

		return directive;
	}
})();
