angular.module('reviewApp')
	.config(MainRouter)

// .config(interceptor)

// function interceptor($httpProvider) {
// 	$httpProvider.interceptors.push('authInterceptorFactory')
// }


function MainRouter($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login')

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partials/home.html'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'partials/login.html'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: 'partials/signup.html'
		})
		.state('loggedOut', {
			url: '/loggedOut',
			templateUrl: 'partials/home.html'
		})
}