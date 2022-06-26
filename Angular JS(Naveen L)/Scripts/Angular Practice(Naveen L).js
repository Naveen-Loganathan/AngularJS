/// <reference path="angular.min.js" />

var App = angular.module("Module", []);

//var Controller = function ($scope) {
//    $scope.message = "Module and Controller";
//};

App.controller("Controller", function ($scope) {
    var employee = {
        firstname: "Naveen",
        lastname: "Loganathan",
        gender: "Male"
    };
    $scope.employee = employee;
    $scope.message = "Module and Controller";
    var country = {
        name: "India",
        capital: "Delhi",
        flag: "https://imgk.timesnownews.com/story/main_indian_flag_iStock-1194408359.jpg?tr=w-400,h-300,fo-auto"
    };
    $scope.country = country;
    $scope.message1 = "Hello Naveen";

    //Dislay More Employee
    var employees = [
        { firstname: "Naveen", lastname: "Loganathan", gender: "Male", salary: 25000 },
        { firstname: "Krishna", lastname: "Ajay", gender: "Male", salary: 35000 },
        { firstname: "Vinoth", lastname: "Kumar", gender: "Male", salary: 45000 },
        { firstname: "Ganesh", lastname: "Kumar", gender: "Male", salary: 55000 },
        { firstname: "Vijay", lastname: "Mathan", gender: "Male", salary: 65000 }
    ];
    $scope.employees = employees;

    //Dislay countries in nesting repeat
    var countries = [
        {
            name: "UK",
            cities: [
                { name: "London" },
                { name: "Manchester" },
                { name: "Birmingham" },
            ]},
           {
               name: "USA",
               cities: [
                   { name: "Los Angels" },
                   { name: "Chicago" },
                   { name: "Houstan" },
               ]},
              {
                  name: "India",
                  cities: [
                      { name: "Chennai" },
                      { name: "Hydreabad" },
                      { name: "Mumbai" },
                  ]
              }]
    $scope.countries = countries;
    //Handling button events in AngularJS

    var technologies = [
        { name: "C#", likes: 0, dislikes: 0 },
        { name: "ASP.NET", likes: 0, dislikes: 0 },
        { name: "SQL SERVER", likes: 0, dislikes: 0 },
        { name: "HTML", likes: 0, dislikes: 0 },
        { name: "ANGULAR JS", likes: 0, dislikes: 0 }
    ];
    $scope.technologies = technologies;

    $scope.increamentlikes = function (technology) {
        technology.likes++;
    }

    $scope.increamentdislikes = function (technology) {
        technology.dislikes++;
    }

    //Sorting and Filtering Data using Angular JS Filters
    var tblemployee = [
    { name: "Naveen",  dateofbirth: new Date("November 23,1980"), gender: "Male", salary: 25000.788 },
    {name: "Krishna",  dateofbirth: new Date("April 12,1987"), gender: "Male", salary: 35000 },
    { name: "Vinoth", dateofbirth: new Date("March 23,1930"), gender: "Male", salary: 45000 },
    {name: "Ganesh",  dateofbirth: new Date("May 14,1985"), gender: "Male", salary: 55000 },
    { name: "Vijay", dateofbirth: new Date("December 17,1986"), gender: "Male", salary: 65000 }
    ];
    $scope.tblemployee = tblemployee;
    $scope.rowlimit = 3;
    $scope.sortcolumn = "name";

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn1 == column) ? !$scope.reverseSort : false;
        $scope.sortColumn1 = column;
    }
    $scope.getSortClass = function (column) {

        if ($scope.sortColumn1 == column) {
            return $scope.reverseSort
              ? 'arrow-down'
              : 'arrow-up';
        }
        return '';
    }
    //AngularJS sort rows by table header:
    var tblemployee1 = [
   { name: "Naveen",  gender: "Male", salary: 25000.788,city:"Erode" },
   { name: "Krishna", gender: "Male", salary: 35000, city: "Chennai" },
   { name: "Vinoth", gender: "Male", salary: 45000, city: "Madurai" },
   { name: "Ganesh", gender: "Male", salary: 55000, city: "Karur" },
   { name: "Vijay", gender: "Male", salary: 65000, city: "Nammakkal" }
    ];
    $scope.tblemployee1 = tblemployee1;

    //Filter Multiple Properties Angular JS
    $scope.search = function (item) {
        if ($scope.searchText1 == undefined) {
            return true;
        }
        else {
            if (item.city.toLowerCase().indexOf($scope.searchText1.toLowerCase()) != -1 ||
                item.name.toLowerCase().indexOf($scope.searchText1.toLowerCase()) != -1) {
                return true;
            }
        }

        return false;
    };

   
}); 