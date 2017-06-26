  var assert = require('assert');

  function calcularEdad(nombre,dia,mes,anionacimiento) {
  this.nombre = nombre;
  this.dia = dia;
  this.mes = mes;
  this.anionacimiento = anionacimiento;
  this.edad = function(){
  	var fecha = new Date();
  	var anio = fecha.getFullYear();
  	var mesActual = fecha.getMonth();
  	var diaActual = fecha.getDate();
  	if(dia >= diaActual && mes >= mesActual){
  		var res = anio - anionacimiento;
  	}else{
  		res = (anio - anionacimiento) - 1;
  	}
  	return "La edad actual de "+ this.nombre + " es "+ res;
  }
}

describe('Prueba 1', function(){
  it('calcularEdad-1', function(){
    calcularEdad1 = new calcularEdad("Su",23,"8",1991);
    assert.equal('La edad actual de Su es 25', calcularEdad1.edad())
  });
  it('calcularEdad-2', function(){
    calcularEdad2 = new calcularEdad('Mariley',6,9,1995);
    assert.equal('La edad actual de Mariley es 21', calcularEdad2.edad())
  });
});