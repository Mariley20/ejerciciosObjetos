
var assert = require('assert');

  function calcularArea(base,altura) {
  this.base = base;
  this.altura = altura;
  this.area = function(){
  	var area = base * altura;
  	return area;
  }
}


describe('Prueba 1', function(){
  it('calcularArea-1', function(){
    calcularArea1 = new calcularArea(2,10);
    assert.equal(20, calcularArea1.area())
  });
  it('calcularArea-2', function(){
    calcularArea2 = new calcularArea('4',10);
    assert.equal(40, calcularArea2.area())
  });
});
