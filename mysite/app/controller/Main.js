Ext.define('App.controller.Main', {
    extend: 'Ext.app.Controller',
    requires : [
        'App.store.Users',
        'App.store.Permissions',
        'App.store.UserPermissions'
    ]
});
