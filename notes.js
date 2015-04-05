angular.module('myApp', ['ionic'])

.controller('AppController', function($scope, $interval, $ionicSlideBoxDelegate) {

    var maxSlides = 5;
    var slideCounter = 2;

    $scope.data = {};
    $scope.data.slides = [
        {
            title : "Slide 1",
            data  : "Slide 1 Content"
        },
        {
            title : "Slide 2",
            data  : "Slide 2 Content"
        }
    ];

    $ionicSlideBoxDelegate.update();


    var intervalId = $interval( function() {


        if( slideCounter < maxSlides) {

            slideCounter++;
            console.log('Adding a slide');
            $scope.data.slides.push( {
                title : "Slide " + slideCounter,
                data : "Slide " + slideCounter + ' Content'
            });

            $ionicSlideBoxDelegate.update();
        } else {
            console.log('All full!');
            $interval.cancel(intervalId);
        }
    }, 3000);

});

-----------

var values = {name: 'misko', gender: 'male'};
var log = [];
angular.forEach(values, function(value, key) {
  this.push(key + ': ' + value);
}, log);









