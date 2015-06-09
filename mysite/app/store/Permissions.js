Ext.define('App.store.Permissions',{
    extend : 'Ext.data.Store',
    model : 'App.model.Permission',
    proxy : {
        type : 'rest',
        url : '/api/permissions',
        reader : {
            type : 'json'
        }
    },
    autoLoad : true,
    autoSync : true,
});