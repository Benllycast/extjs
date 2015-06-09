Ext.define('App.model.User', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'last_name', type: 'string' },
        { name: 'login', type: 'string' },
        { name: 'password', type: 'string' },
        { name: 'mail', type: 'string' },
        { name: 'tel', type: 'string' },
        { name: 'status', type: 'boolean' },
        { name: 'date_log', type: 'string' }

    ],
    proxy : {
        type : 'rest',
        url : '/api/users',
        reader : {
            type : 'json'
        }
    }
});
