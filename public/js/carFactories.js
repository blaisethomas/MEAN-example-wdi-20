angular
	.module('reviewApp')
	.factory('carsFactory', carsFactory)

carsFactory.$inject = ['$http']

function carsFactory($http){
	var carsUrl = 'http://localhost:3000/api/cars';
	var cars = {}

	cars.list = function(){
		return $http.get(carsUrl)
	}

	cars.addCar = function(data){
		return $http.post(carsUrl, data)
	}

	return cars
}