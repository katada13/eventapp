var module = angular.module('EventApp', []);

module.controller('EventListCtrl', [function () {
    this.listTitle = 'Events in January';
    this.eventList = [{
        img: "http://lorempixel.com/320/240/nightlife/",
        name: "Blues concert",
        count: 0,
        date: new Date()
    }, {
        img: "http://lorempixel.com/320/240/people/",
        name: "ee meeting",
        count: 0,
        date: new Date()
    }, {
        img: "http://lorempixel.com/320/240/sports/",
        name: "football",
        count: 0,
        date: new Date()
    }];

    this.initEventData = function () {
        this.eventData = {};
        this.eventData.img = "http://lorempixel.com/320/240/people/";
        this.eventData.count = 0;
    };

    this.initEventData();

    this.addPeopleToEvent = function (el) {
        el.count++;
    };

    this.addEvent = function () {
        this.eventList.push(this.eventData);
        console.log(this.eventData.date);
        this.initEventData();

    };

}]);

module.filter('niceDate', ['ConfigService', function (configService) {
    return function (date) {
        return moment(date).format(configService.dateFormat);
    };
}]);

module.service('ConfigService', function () {
    "use strict";

    this.dateFormat = 'YYYY/MM/DD';
});
