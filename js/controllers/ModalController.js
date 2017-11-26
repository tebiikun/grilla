var app = angular.module('despegar');

app.controller('ModalController', ['$uibModalInstance', 'CommerceService', 'element', function ($uibModalInstance, CommerceService, element) {
  var $ctrl = this;
  $ctrl.element = element;
  $ctrl.delete = function (id) {
  	CommerceService.deleteCommerce(id);
    $uibModalInstance.close();
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);