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

$.getJSON(API_URL,function (users) {
    window.data.rows = users;
});