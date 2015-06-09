Ext.define('App.store.UserPermissions',{
    extend : 'Ext.data.Store',
    model : 'App.model.UserPermissions',
    proxy : {
        type : 'rest',
        url : '/api/user_permissions',
        reader : {
            type : 'json'
        }
    },
    autoLoad : true,
    autoSync : true

});