angular.module('ui.tree',[])
.value('xtree.config',{
    treeClass:'aui-tree',
    iconClass:'aui-tree-icon',
    nodeClass:'aui-tree-node',
    expandClass:'xicon-chevron-down',
    collapseClass:'xicon-chevron-right',
    activeClass:'aui-active',
    treeTemplate:'/js/angularplugin/tree/template/tree.html',
    nodeTemplate:'/js/angularplugin/tree/template/node.html',
    onclick:angular.noop,
    oncollapse:angular.noop
});