function LoginController() {

  function isValidUserId(userList, user) {
    return userList.indexOf(user) >= 0;
  }

  return {
    isValidUserId
  }

}

module.exports = LoginController();
