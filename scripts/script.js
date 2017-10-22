var app = angular.module('myApp',[]);

app.controller("newsController",function($scope,$http,$location,$anchorScroll){
	var apiKey = 'd1387d4c7ace4c02afc2f14fe6c20852';
	$scope.selectedNews = {};
	$scope.Preview = true;
	
	
	//service for getting data from an api

	$http.get(" https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=d1387d4c7ace4c02afc2f14fe6c20852").then(function(response) {
        $scope.news = response.data;
        $scope.selectedNews = response.data.articles[0];
    });

	$scope.newsClick =  function(article){
		$scope.Preview = true;
		$scope.selectedNews = article;
		var old = $location.hash();
	    $location.hash('news');
	    $anchorScroll();
	    $location.hash(old);
	};

});