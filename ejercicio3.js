var assert = require('assert');

  function Presentandome(nombre,edad,pasatiempo) {
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
  this.presentate = function(){
  	return "hola soy " +this.nombre+ " tengo " +this.edad+ " años y me gusta " +this.pasatiempo;
  }
}

Presentandome1 = new Presentandome("Mariley",21,"escuchar musica");
console.log(Presentandome1.presentate());

describe('Prueba 1', function(){
  it('calcularArea-1', function(){
    Presentandome1 = new Presentandome("Mariley",21,"jugar");
    assert.equal('hola soy Mariley tengo 21 años y me gusta jugar', Presentandome1.presentate())
  });
  it('calcularArea-2', function(){
    Presentandome2 = new Presentandome("Aracely",18, "Leer");
    assert.equal('hola soy Aracely tengo 18 años y me gusta Leer', Presentandome2.presentate())
  });
});