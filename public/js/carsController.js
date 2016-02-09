angular
	.module('reviewApp')
	.controller('CarsController', CarsController)

CarsController.$inject = ['carsFactory']

function CarsController (carsFactory){
	var vm = this;
	vm.api = carsFactory
	vm.cars = []
	vm.newCar = {}
	vm.api.list()
		.success(function(res){
			vm.cars = res
		})
	vm.addCar = function(make,model,year){
		var data = {make:make, model:model, year:year}
		vm.api.addCar(data)
			.then(function success(res){
				vm.cars.push(res.data.car)
				vm.newCar = {}
			})
	}
}

