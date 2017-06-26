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
  	var res;
  	if(mes >= mesActual+1){
  		res = (anio - anionacimiento)-1;
  	}else{
  		res = (anio - anionacimiento);
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
    calcularEdad2 = new calcularEdad('Mariley',6,4,1995);
    assert.equal('La edad actual de Mariley es 22', calcularEdad2.edad())
  });
});