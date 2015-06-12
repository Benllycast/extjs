var API_URL = 'http://mysite.com/api/users/';
var data = {
        headers : [
        'id',
        'name',
        'last_name',
        'login',
        'password',
        'mail',
        'tel',
        //'date_log'
        ],
        rows : {} 
    };

// $.getJSON(API_URL,function (users) {
//     window.data.rows = users;
// });
    
function getUserData() {
    var user = {};
    user.id = $("input#id").val();
    user.name = $("input#name").val();
    user.last_name = $("input#last_name").val();
    user.login = $("input#login").val();
    user.password = $("input#password").val();
    user.mail = $("input#mail").val();
    user.tel = $("input#tel").val();
    user.status = $("input#status").val();
    console.log(user);
    return user;
};

var userData = {};
$(document).ready(function (evt) {
    // body...
    ucv = new UserCollectionView({model : usrcol, el: $('#content-pane')});
    ucv.render();
    userData = new ControlData({el: $("div#userdata")});
    userData.delegateEvents();
});

