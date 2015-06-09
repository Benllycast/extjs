Ext.define('App.view.UserGrid', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.usergrid',
    title : 'Usuarios',
    store : Ext.create('App.store.Users'),
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
            text : 'Apellido',
            dataIndex : 'last_name'
        },
        {
            text : 'Login',
            dataIndex : 'login'
        },
        {
            text : 'E-mail',
            dataIndex : 'mail'
        },
        {
            text : 'Telefono',
            dataIndex : 'tel'
        },
        {
            text : 'Estado',
            dataIndex : 'status'
        }
    ]
})