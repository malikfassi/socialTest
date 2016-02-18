(function () {
	'use strict';

	angular
		.module('social_test.authentication', [
			'social_test.authentication.controllers',
			'social_test.authentication.services'
		]);

	angular
		.module('social_test.authentication.controllers', []);

	angular
		.module('social_test.authentication.services', ['ngCookies']);
})();
