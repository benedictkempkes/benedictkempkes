app.controller('viewController', function($scope, $http){
    $http.get("data/layouts.json")
    .then(function(response) {
        console.log(response.data);
    });
});
