/**
 * Created by anonymoussc on 6/28/15 2:14 PM.
 */

describe('MainCtrl', function () {
    beforeEach(module('testb'));

    it('should assign the correct username', inject(function ($controller, $rootScope) {
        var $scope = $rootScope.$new();

        $controller('MainCtrl', {$scope : $scope});

        expect($scope.emcee).toEqual('homie');
    }));
});