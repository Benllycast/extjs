Ext.define('App.view.PermissionGrid',{
    extend : 'Ext.grid.Panel',
    alias : 'widget.permissiongrid',
    title : 'Permisos',
    store : Ext.create('App.store.Permissions'),
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
            text : 'Activo',
            dataIndex : 'status',
            xtype : 'booleancolumn',
            trueText : 'SI',
            falseText : 'NO',
            editor : {
                xtype : 'checkboxfield'
            }
        }
    ],


});