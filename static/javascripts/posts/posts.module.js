(function () {
	'use strict';

	angular
		.module("social_test.posts", [
			'social_test.posts.controllers',
			'social_test.posts.directives',
			'social_test.posts.services'
		]);

	angular
		.module('social_test.posts.controllers', []);

	angular
		.module('social_test.posts.directives', ['ngDialog']);

	angular
		.module('social_test.posts.services', []);

})();
