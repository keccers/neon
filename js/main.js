var module = angular.module("neon", [])

module.factory('instagram', ['$http', function($http){

  return {
    fetchPopular: function(callback){
            var endPoint = "https://api.instagram.com/v1/users/1817025680/media/recent/?client_id=c34fb0506ddc4c128172b8570d4b15e4&callback=JSON_CALLBACK";
            $http.jsonp(endPoint).success(function(response){
                callback(response.data);
            });
    }
  }

}]);

module.controller("neonForm", function($scope, $http, instagram) {

    // set up neon form and base text
       $scope.neonForm = {};
       $scope.neonForm.name = "love you";
       $scope.neonForm.status = "text";

  // init our svg shapes
       $scope.neonForm.designs = [
            {name:'heart', path:'heart.html'},
            {name:'coffee', path:'coffee.html'},
            {name:'sneaker', path:'sneaker.html'},
        ];

  // init our fonts
        $scope.neonForm.fonts = [
            {name:'cursive', family:'Sacramento', size: '60px', img: 'img/sacramento.png'},
            {name:'sans-serif', family:'Open Sans', size: '55px', img: 'img/opensans.png'},
        ];

  //init our colors
       $scope.neonForm.colors = [
            {name:'white', hex:'#ffffff', isActive: true},
            {name:'blue', hex:'#00FFFF', isActive: false},
            {name:'pink', hex:'#FF00FF', isActive: false},
            {name:'yellow', hex:'#FFFF00', isActive: false},
        ];

  // set default shape, font and color and state for sign
        $scope.neonForm.myDesign = $scope.neonForm.designs[0];
        $scope.neonForm.myFont = $scope.neonForm.fonts[0];
        $scope.neonForm.myColor = $scope.neonForm.colors[0];
        $scope.neonForm.signType = "text"

        $scope.neonForm.pics = [];
        $scope.neonForm.have = [];

//functions to set state when the appropriate input is clicked
        $scope.neonForm.showShape = function(){
          $scope.neonForm.signType = 'shape';
          console.log($scope.neonForm.signType);
        }

        $scope.neonForm.showText = function(){
          $scope.neonForm.signType = 'text';
          console.log($scope.neonForm.signType);
        }

  // function to build urls for svg templates
        $scope.neonForm.designUrl = function(design) {
          return 'shape-template/' + design.name + '.html';
        }

// function to set current sign color on click
        $scope.neonForm.setMyColor = function(color){
          console.log($scope.neonForm.colors);
          console.log(color.name);
        };

// selected color
        $scope.neonForm.selectColor = function(index, color) {
          $scope.selectedColor = index;
          $scope.neonForm.myColor = color;
          console.log(color.name);
        };

// selected font
        $scope.neonForm.selectFont = function(index, font) {
          $scope.selectedFont = index;
          $scope.neonForm.myFont = font;
          console.log(font.name);
        };

// random font/color output
        $scope.neonForm.randomize = function(){
          $scope.neonForm.myFont = $scope.neonForm.fonts[Math.floor(Math.random() * $scope.neonForm.fonts.length)];
          $scope.neonForm.myColor = $scope.neonForm.colors[Math.floor(Math.random() * $scope.neonForm.colors.length)];
        };

//  gets the lastest instagram photos from the lightning project account
      $scope.neonForm.pics = [];

      instagram.fetchPopular(function(data){
        $scope.neonForm.pics = data;
      });

  });

