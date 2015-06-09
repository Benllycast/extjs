Ext.define('App.model.UserPermissions', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'date_log', type: 'string' },
        { name: 'assigned_by', type: 'int' },
        { name: 'user_id', type: 'int' },
        { name: 'permission_id', type: 'int' }

    ], 

    proxy : {
        type : 'rest',
        url : '/api/user_permissions',
        reader : {
            type : 'json'
        }
    }
});
