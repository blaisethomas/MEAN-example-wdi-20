angular.module('reviewApp')
	.config(MainRouter)
	.config(interceptor)

function interceptor($httpProvider) {
	$httpProvider.interceptors.push('authInterceptorFactory')
}

function MainRouter($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login')

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partials/home.html',
			controller: 'UsersController as usersCtrl'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'partials/login.html',
			controller: 'UsersController as usersCtrl'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: 'partials/signup.html',
			controller: 'UsersController as usersCtrl'
		})
		.state('loggedOut', {
			url: '/loggedOut',
			templateUrl: 'partials/home.html',
			controller: 'UsersController as usersCtrl'
		})
		.state('cars', {
			url: '/cars',
			templateUrl: 'partials/car-list.html',
			controller: 'CarsController as carsCtrl'
		})
		.state('detail', {
			url: '/cars/:carId',
			templateUrl: 'partials/car-detail.html',
			controller: 'CarDetailsController as carDetailsCtrl'
		})
}