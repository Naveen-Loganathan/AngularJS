/// <reference path="angular.min.js" />

var App = angular.module("Modules", []);

App.controller("Controllers", function ($scope) {

    //ng hide and ng show in AngularJS

    var tblemployee = [
   { name: "Naveen", gender: "Male",city: "Erode",salary: 25000 },
   { name: "Krishna", gender: "Male", city: "Chennai", salary: 35000 },
   { name: "Vinoth", gender: "Male", city: "Madurai", salary: 45000},
   { name: "Ganesh", gender: "Male", city: "Karur" , salary: 55000 },
   { name: "Vijay", gender: "Male", city: "Nammakkal" , salary: 65000}
    ];
    $scope.tblemployee = tblemployee;

    //ng include directive in Angular JS
    var tblemployee1 = [
  { name: "Naveen", gender: "Male",salary: 25000 },
  { name: "Krishna", gender: "Male",salary: 35000 },
  { name: "Vinoth", gender: "Male", salary: 45000},
  { name: "Ganesh", gender: "Male", salary: 55000 },
  { name: "Vijay", gender: "Male", salary: 65000}
    ];
    $scope.tblemployee1 = tblemployee1;

    //ng include Another Method
    $scope.employeeview = "EmployeeTable(include dire).html";
    
});