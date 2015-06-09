Ext.define('App.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'App.view.UserGrid',
        'App.view.PermissionGrid'
    ],

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[
            {
                title: 'Usuarios',
                items : {
                    xtype : 'usergrid'
                }
            },
            {
                title : 'Permisos',
                items : {
                    xtype : 'permissiongrid'
                }
            }
        ]
    }]
});