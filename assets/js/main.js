//función constructora para Consultorio

function Consultorio(nombre, paciente) {
    this.nombre = nombre;
    this.paciente = paciente;
}

//función constructora para Pacientes
function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;
    Object.defineProperty(this, 'getNombre', {
        get: function () {
            return _nombre;
        }
    });
    Object.defineProperty(this, 'setNombre', {
        set: function (nombre) {
            _nombre = nombre;
        }
    });
    Object.defineProperty(this, 'getEdad', {
        get: function () {
            return _edad;
        }
    });
    Object.defineProperty(this, 'setEdad', {
        set: function (edad) {
            _edad = edad;
        }
    });
    Object.defineProperty(this, 'getRut', {
        get: function () {
            return _rut;
        }
    });
    Object.defineProperty(this, 'setRut', {
        set: function (rut) {
            _rut = rut;
        }
    })
    Object.defineProperty(this, 'getDiagnostico', {
        get: function () {
            return _diagnostico;
        }
    });
    Object.defineProperty(this, 'setDiagnostico', {
        set: function (diagnostico) {
            _diagnostico = diagnostico;
        }
    })
}

// Implementar métodos getters y setters para poder acceder y modificar los datos de
// los pacientes
Paciente.prototype.getNombre = function () {
    return this._getnombre;
}
Paciente.prototype.setNombre = function (nombre) {
    this._setNombre = nombre;
}
Paciente.prototype.getEdad = function () {
    return this._getedad;
}
Paciente.prototype.setEdad = function (edad) {
    this.setEdad = edad;
}
Paciente.prototype.getRut = function () {
    return this._getrut;
}
Paciente.prototype.setNombre = function (rut) {
    this._setRut = rut;
}
Paciente.prototype.getDiagnostico = function () {
    return this._getDiagnostico;
}
Paciente.prototype.setNombre = function (diagnostico) {
    this._setDiagnostico = diagnostico;
}


//Instanciar cada objeto utilizando la instrucción new

var consultorio = new Consultorio('Consultorio Medico Comunal'[pacienteUno, pacienteDos, pacienteTres, pacienteCuatro, pacienteCinco, pacienteSeis, pacienteSiete, pacienteOcho, pacienteNueve, pacienteDiez]);
var pacienteUno = new Paciente('FRANCISCA ROJAS', 24, '9878782-1', 'COVID-19');
var pacienteDos = new Paciente('PAMELA ESTRADA', 55, '15345241-3', 'DIABETES');
var pacienteTres = new Paciente('ARMANDO LUNA', 36, '16445345-9', 'NEUMONIA');
var pacienteCuatro = new Paciente('MANUEL GODOY', 15, '17666419-0', 'GRIPE');
var pacienteCinco = new Paciente('RAMON ULLOA', 33, '14989389-K', 'HIPER TENSION');
var pacienteSeis = new Paciente('PAULA SANCHEZ', 54, '15554774-5', 'COVID-19');
var pacienteSiete = new Paciente('ANGÉLICA NAVAS', 26, '15444147-9', 'COVID-19');
var pacienteOcho = new Paciente('ANA KLAPP', 45, '17879423-9', 'CEFALEA');
var pacienteNueve = new Paciente('FELIPE MARDONES', 44, '1547423-6', 'DOLOR ABDOMINAL');
var pacienteDiez = new Paciente('DIEGO MARRE', 51, '16554741-K', 'GRIPE');

console.log(consultorio)
console.log(pacienteDos)
console.log(Paciente)




