var app = angular.module("counterApp", []);

app.controller("CountCtrl", function ($scope) {
	$scope.countDownFromFive = function() {
		for(var i = 5; i > 0; i --){
			console.log(i);
		}
	};

	$scope.countUpToFive = function() {
		for(var i = 1; i <=5 ; i ++){
			console.log(i);
		}
	};
});

app.directive("listmore", function() {
	return function(scope, element, attrs) {
		element.bind("click", function() {
			scope.$apply(attrs.listmore);
		});
	};
});


app.directive("rollover", function() {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			element.bind("mouseenter",function() {
				element.addClass(attrs.rollover);
			})
		}
	}
})

app.directive("rollout", function() {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			element.bind("mouseleave",function() {
				element.removeClass(attrs.rollout);
			})
		}
	}
})