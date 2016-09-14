(function () {
  angular.module('LunchCheck', [])
  .controller('LunchController', lunchController);

  lunchController.$inject = ['$scope'];

  function lunchController($scope) {
    var dishList = getDishList($scope.dishes);
    var maxDishes = 3;

    var dishCount = dishList.length;

    if (dishCount === 0) {
      $scope.outputMessage = 'Please enter data first';
      return;
    }

    if (dishCount > maxDishes) {
      $scope.outputMessage = 'Too much!';
      return;
    }

    $scope.outputMessage = 'Enjoy!';

  }

  function getDishList(dishes) {
    return dishes.replace(/\s+/, '').replace(/,+/, ',').split(',');
  }


})();
