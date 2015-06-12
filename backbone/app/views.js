var UserView = Backbone.View.extend({
    model : UserModel,
    tagname : "tr",
    template : '',
    initialize : function () {
        this.template = _.template($('#useritem').html());
    },
    render : function () {
        // TODO: deberia ser 
        this.$el.append(this.template(this.model.attributes));
        return this;
    }
});

var UserCollectionView = Backbone.View.extend({
    model : UserCollection,
    tagmane : 'table',
    template : '',
    initialize : function () {
        this.template = _.template($('#usercollection').html());
    },
    render : function () {
        console.log("rendering!!!!")
        this.$el.html(this.template({}));
        console.log(this.model.length);
        for(var i = 0; i < this.model.length; ++i){
            var m_userview = new UserView({model: this.model.at(i), el:this.$el.find('#usercollection-body')});
            m_userview.render();
        }
        return this;
    }
});

var ControlData = Backbone.View.extend({
    events : {
        "click button#btnRead"      : "readUser",
        "click button#btnCreate"    : "createUser",
        "click button#btnUpdate"    : "updateUser",
        "click button#btnDelete"    : "deleteUser" 
    },

    readUser : function () {
        // TODO: hacer esto
        console.log("user read");
    },
    createUser : function () {
        // TODO: hacer esto
        console.log("user create");
    },
    updateUser : function () {
        // TODO: hacer esto
        console.log("user update");
    },
    deleteUser : function () {
        // TODO: hacer esto
        console.log("user delete");
    },
});

