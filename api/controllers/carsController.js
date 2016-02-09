var Car = require('../models/Car.js');

function getAllCars(req,res){
	Car.find({}, function(err, cars){
		res.json(cars)	
	})
}

function createCar(req,res){
	var newCar = new Car
	newCar.make = req.body.make
	newCar.model = req.body.model
	newCar.year = req.body.year
	newCar.save(function(err, car){
		if(err) throw err
		res.json({message: "Car Saved!", car: car})
	})
}

function getOneCar(req,res){
	Car.findById(req.params.id, function(err,car){
		if(err) throw err
		res.json(car)
	})
}

function updateCar(req,res){
	Car.findOneAndUpdate({_id: req.params.id}, req.body, function(err,car){
		if(err) throw err
		Car.findById(req.params.id, function(err,updatedCar){
			res.json(updatedCar)
		})
	})
}

function deleteCar(req,res){
	Car.findOneAndRemove({_id: req.params.id}, req.body, function(err,car){
		if(err) throw err
		res.json({message:"car deleted!"})
	})
}


module.exports = {
	getAllCars : getAllCars,
	createCar : createCar,
	getOneCar : getOneCar,
	updateCar : updateCar,
	deleteCar : deleteCar

}