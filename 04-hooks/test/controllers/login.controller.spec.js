var assert = require('assert');
var loginController =  require('../../controllers/login.controller');

beforeEach('Setting up the userList', function(){
  console.log('beforeEach');
  loginController.loadUserList(['abc123','xyz321']);
  //throw {error: 'Thrwoing Error to fail'}
});

describe('LoginController', function () {

  describe('isValidUserId', function(){

    it('should return true if valid user id', function(){
      var isValid = loginController.isValidUserId('abc123')
      assert.equal(isValid, true);
    });

    it('should return false if invalid user id', function(){
      var isValid = loginController.isValidUserId('abc1234')
      assert.equal(isValid, false);
    });

  });

  describe('isValidUserIdAsync', function(){

    it('should return true if valid user id', function(done){
      loginController.isValidUserIdAsync('abc123',
      function(isValid){
          assert.equal(isValid, true);
          done();
      });
    });

  });

});
