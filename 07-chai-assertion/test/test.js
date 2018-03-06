
var assert = require('assert');
var should = require('chai').should();

describe('Object Test', function(){
  it('should have property name', function(){
    var car = {name:'Figo', Maker:'Ford'}

    car.should.have.property('name');
  });

  it('should have property name with value Figo', function(){
    var car = {name:'Figo', Maker:'Ford'}
    car.should.have.property('name').equal('Figo');
  });

  it('should compare objects', function(){
    var car = {name:'Figo', Maker:'Ford'}
    var car1 = {name:'Figo', Maker:'Ford'}

    // car.should.equal(car1);
    car.should.deep.equal(car1);
  });

  it('handling null', function(){
    var car = null;
    //car.should.not.exist;
    should.exist(car);
  });
});
