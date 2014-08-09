var demo = angular.module("demo", ['ngResource'])

demo.controller("TescoCtrl", function ($scope, $resource) {
    $scope.tesco = $resource('http://localhost:3000/:action',{
        action: 'products.json'}, {callback: 'JSON_CALLBACK'},
        { get: {method: 'JSONP'}}
    );
    $scope.products = $scope.tesco.get();

});