function LoginController() {

  var userList;
  function loadUserList(users){
    userList = users;
  }

  function isValidUserId(user) {
    return userList.indexOf(user) >= 0;
  }

  function isValidUserIdAsync(user, callback) {
    setTimeout(function(){
      callback(userList.indexOf(user) >= 0)
    }, 1);
  }

  function isAuthorizedPromise(user){
    return new Promise(function(resolve){
        setTimeout(function(){resolve(userList.indexOf(user) >= 0)}, 10);
    });
  }

  return {
    isValidUserId,
    isValidUserIdAsync,
    loadUserList,
    isAuthorizedPromise
  }

}

module.exports = LoginController();
