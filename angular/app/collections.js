var UserCollection = Backbone.Collection.extend({
    model : UserModel,
    url : "http://mysite.com/api/users",
});

var PermissionCollections = Backbone.Collection.extend({
    model : PermissionModel,
    url : "http://mysite.com/api/permissions"
});

var usrcol = new UserCollection();
usrcol.fetch({async:false});

var percol = new PermissionCollections();
//percol.fetch();