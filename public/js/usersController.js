angular.module('reviewApp')
	.controller('UsersController', UsersController)

function UsersController() {
	var self = this
	self.hi = "Hello, World!"
}