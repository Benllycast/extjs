Ext.define('App.view.PermissionGrid',{
    extend : 'Ext.grid.Panel',
    alias : 'widget.permissiongrid',
    title : 'Permisos',
    store : Ext.create('App.store.Permissions'),
    layout : 'fit',
    height : 300,
    padding : 10,
    columns : [
        {
            text : 'Id',
            dataIndex : 'id'
        },
        {
            text : 'Nombre',
            dataIndex : 'name'
        },
        {
            text : 'Estado',
            dataIndex : 'status'
        }
    ]

});