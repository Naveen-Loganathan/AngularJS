/// <reference path="Scripts/angular.min.js" />


var app = angular
            .module("Demo", [])
            .controller("countryController", function () {
                this.name = "India";
            })
            .controller("stateController", function ($scope) {
                this.name = "Maharashtra";
            })
            .controller("cityController", function ($scope) {
                this.name = "Mumbai";
            });
