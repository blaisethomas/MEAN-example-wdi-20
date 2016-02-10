angular.module('reviewApp', ['ui.router'])
	.directive('navBar', navBar)
	.directive('carForm', carForm)

function carForm(){
	var directive = {
		restrict: 'E',
		templateUrl: '/partials/car-form.html'
	}
	return directive
}

function navBar(){
	var directive = {
		restrict: 'E',
		templateUrl: '/partials/nav.html',
		transclude: true
	}
	return directive
}