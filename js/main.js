angular.module("neon", [])

.controller("neonForm", function($scope, $http) {
       $scope.neonForm = {};
       $scope.neonForm.name = "love you";

       $scope.neonForm.designs = [
            {name:'heart', path:'img/love_heart.svg'},
            {name:'diamond', path:'img/heart.svg'},
        ];

        $scope.neonForm.fonts = [
            {name:'cursive', family:'Sacramento', size: '60px', img: 'img/sacramento.png'},
            {name:'sans-serif', family:'Open Sans', size: '55px', img: 'img/opensans.png'},
        ];

        $scope.neonForm.colors = [
            {name:'white', hex:'#ffffff', isActive: true},
            {name:'blue', hex:'#00FFFF', isActive: false},
            {name:'pink', hex:'#FF00FF', isActive: false},
            {name:'yellow', hex:'#FFFF00', isActive: false},
        ];

        $scope.neonForm.myDesign = $scope.neonForm.designs[0];
        $scope.neonForm.myFont = $scope.neonForm.fonts[0];
        $scope.neonForm.myColor = $scope.neonForm.colors[0];

        $scope.neonForm.setMyColor = function(color){
          console.log($scope.neonForm.colors);
          console.log(color.name);
        };

        $scope.neonForm.selectColor = function(index, color) {
          $scope.selectedColor = index;
          $scope.neonForm.myColor = color;
          console.log(color.name);
        };

        $scope.neonForm.selectFont = function(index, font) {
          $scope.selectedFont = index;
          $scope.neonForm.myFont = font;
          console.log(font.name);
        };

        $scope.neonForm.randomize = function(){
          $scope.neonForm.myFont = $scope.neonForm.fonts[Math.floor(Math.random() * $scope.neonForm.fonts.length)];
          $scope.neonForm.myColor = $scope.neonForm.colors[Math.floor(Math.random() * $scope.neonForm.colors.length)];
        };


     // $scope.myForm.submitTheForm = function(item, event) {
     //   console.log("--> Submitting form");
     //   var dataObject = {
     //      name : $scope.myForm.name
     //      ,car  : $scope.myForm.car
     //   };

     //   var responsePromise = $http.post("/angularjs-examples/json-test-data.jsp", dataObject, {});
     //   responsePromise.success(function(dataFromServer, status, headers, config) {
     //      console.log(dataFromServer.title);
     //   });
     //    responsePromise.error(function(data, status, headers, config) {
     //      alert("Submitting form failed!");
     //   });
     // }
  });