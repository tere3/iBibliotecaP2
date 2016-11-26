angular.module('ioniApp', ['ionic'])

.controller('homeCtrl', function($scope){

})

.controller('authorCtrl', function($scope){
	$scope.author={
		name: '',
		email: '',
		facebook: '',
		phone: ''
	};
})

.controller('ibibliotecaCtrl', function($scope, $ionicModal){
	var books = [       
{ title: 'La colmena', year: '1951', author: 'Camilo José Cela Trulock',          isbn: '843992688X', editorial: 'Anaya', cover: 'https://s-media-cache-ak0.pinimg.com/236x/c3/69/61/c36961f050ca8c5f3fad1a3636de9204.jpg' }, 
{ title: 'La galatea', year: '1585', author: 'Miguel de Cervantes Saavedra',          isbn: '0936388110', editorial: 'Anaya', cover: 'http://www.madelinemiller.com/wp-content/uploads/2013/08/Galatea-e-c-high-res-final1.jpg' },       
{ title: 'El ingenioso hidalgo don Quijote de la Mancha', year: '1605',          author: 'Miguel de Cervantes Saavedra',          isbn: '0844273619', editorial: 'Anaya', cover: 'https://s-media-cache-ak0.pinimg.com/originals/8b/08/b7/8b08b78156c4b772707be00677d9fb20.jpg' },       
{ title: 'La dorotea', year: '1632', author: 'Félix Lope de Vega y Carpio',          isbn: '847039360X', editorial: 'Anaya', cover: 'https://www.buffalolib.org/vufind/bookcover.php?isn=0674505905&size=medium&upc=' },       
{ title: 'La dragontea', year: '1602', author: 'Félix Lope de Vega y Carpio',          isbn: '8437624045', editorial: 'Anaya', cover: 'https://pictures.abebooks.com/isbn/9788437624044-es-300.jpg' }     
];
	$scope.books = books; 

	$ionicModal.fromTemplateUrl('templates/bookDetails.html',{
		scope: $scope, //propiedad inyectada
		animation: 'slide-in-up' //animacion de la nueva tarjeta
	}).then(function(modal){
		$scope.modalDetails = modal; //al modal se le agrega su modal
		$scope.showDetails = function(book){
			$scope.bookDetails = book;
			$scope.modalDetails.show();
		}
	});

	$scope.openModal = function(){
		$scope.modalDetails.show();//mostrar el modal
	}

	$scope.closeModal = function(){
		$scope.modalDetails.hide();//cerrar el modal
	}
})

.controller('curriculumCtrl', function($scope){
	var works = [     
	{ date: Date.now(), description: 'IOTECH Development of apps' },      
	{ date: Date.now(), description: 'Instituto Tecnologico de Chihuahua#2 Programming Teacher' },      
	{ date: Date.now(), description: 'Eatinn App para pedidos de comida' } 
]; 
$scope.works = works;
})
