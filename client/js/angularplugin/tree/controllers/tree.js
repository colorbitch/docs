angular.module('ui.tree')

.controller('xtreeController',
['$scope','xtree.config',
    function($scope,config){
        
        $scope.collapse = function($event){
            this._collapsed = !this._collapsed;
        };
        
        $scope.click = function($event){
            $scope.opera.activeNode = this.node;
            config.onclick($event,this.node,this);
        };
    }
]);