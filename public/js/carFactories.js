angular
	.module('reviewApp')
	.factory('carsFactory', carsFactory)

carsFactory.$inject = ['$http']

function carsFactory($http){
	var carsUrl = 'http://localhost:3000/api/cars'
	var cars = {}

	cars.list = function(){
		return $http.get(carsUrl)
	}

	cars.show = function(carId){
		return $http.get(carsUrl + '/' + carId)
	}

	cars.addCar = function(data){
		return $http.post(carsUrl, data)
	}

	cars.updateCar = function(carId,data){
		return $http.patch(carsUrl + '/' + carId, data)
	}

	cars.removeCar = function(carId){
		return $http.delete(carsUrl + '/' + carId)
	}
	
	return cars
}