var UserModel = Backbone.Model.extend({
    defaults : {
        id : "",
        name : "",
        last_name : "",
        login : "",
        password : "",
        mail : "",
        tel : "",
        status :"",
        date_log : ""
    },
     idAttribute: "id",
    initialize : function () {
        // body...
        console.log("init model: permissions");
    },
    constructor: function (attributes, options) {
        console.log('User\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function (attr) {
        return ("valid" + attr);
    },
    urlRoot : "http://mysite.com/api/users",
});

var PermissionModel = Backbone.Model.extend({
    defautlts : {
        id : "",
        name : "",
        status : "",
    },
    idAttribute: "id",
    initialize : function (argument) {
        // body...
        console.log("init model: permissions");
    },
    constructor: function (attributes, options) {
        console.log('Permissions\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function (attr) {
        return ("valid" + attr);
    },
    urlRoot : "http://mysite.com/api/permissions"
});

var per = new PermissionModel();
var usr = new UserModel();
