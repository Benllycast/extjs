Ext.define("App.store.Users",{
    extend : 'Ext.data.Store',
    model : 'App.model.User',

    proxy : {
        type : 'rest',
        url : '/api/users',
        reader : {
            type : 'json'
        }
    },
    autoLoad : true,
    autoSync : true,
});