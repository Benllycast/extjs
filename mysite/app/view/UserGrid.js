Ext.define('App.view.UserGrid', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.usergrid',
    title : 'Usuarios',
    store : Ext.create('App.store.Users'),
    layout : 'fit',
    height : 300,
    padding : 10,
    selType : 'rowmodel',
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        })
    ],
    columns : [
        {
            text : 'Id',
            dataIndex : 'id'
        },
        {
            text : 'Nombre',
            dataIndex : 'name',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text : 'Apellido',
            dataIndex : 'last_name',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text : 'Login',
            dataIndex : 'login',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text : 'E-mail',
            dataIndex : 'mail',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text : 'Telefono',
            dataIndex : 'tel',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text : 'Estado',
            dataIndex : 'status',
            xtype : 'booleancolumn',
            trueText : 'SI',
            falseText : 'NO',
            editor : {
                xtype : 'checkboxfield'
            }
        }
    ]
})