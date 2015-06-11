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
    

$(document).ready(function (evt) {
    // body...
    ucv = new UserCollectionView({model : usrcol, el: $('#content-pane')});
    ucv.render();
    // uv = new UserView({model: usr, el:$('#usercollection-body')});
    // uv.render();
});

