Ext.define('App.model.Permission', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'status', type: 'boolean' }

    ],
    proxy : {
        type : 'rest',
        url : '/api/permissions',
        reader : {
            type : 'json'
        }
    }
});
