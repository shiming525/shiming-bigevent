
//管理员的所有功能
var user = {
    /**
     * 
     * @param {*} userName 用户名
     * @param {*} password 密码
     * @param {*} callback 回调函数
     */
    login: function (userName, password, callback) {
        $.post(type.login, { user_name: userName, password: password }, function (res) {
            callback(res);
        })
    },
    loginOut: function (callback) {
        $.post(type.loginOut, function (res) {
            callback(res);
        })
    },
    user_message: function (userName, userImg, callback) {
        $.get(type.user_message, { nickname: userName, user_pic: userImg }, function (res) {
            console.log(res);
            callback(res);
        })
    }
}