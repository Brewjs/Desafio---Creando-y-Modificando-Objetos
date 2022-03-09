//función constructora para Consultorio

function Consultorio(nombre, paciente) {
    this.nombre = nombre;
    this.paciente = paciente || [];
}

//función constructora para Pacientes
function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = nombre;
    this._edad = edad;
    this._rut = rut;
    this._diagnostico = diagnostico;
}

// Implementar métodos getters y setters para poder acceder y modificar los datos de
// los pacientes
Paciente.prototype.getNombre = function () {
    return this._nombre;
}
Paciente.prototype.setNombre = function (nombre) {
    this._nombre = nombre;
}
Paciente.prototype.getEdad = function () {
    return this._edad;
}
Paciente.prototype.setEdad = function (edad) {
    this._edad = edad;
}
Paciente.prototype.getRut = function () {
    return this._rut;
}
Paciente.prototype.setNombre = function (rut) {
    this._rut = rut;
}
Paciente.prototype.getDiagnostico = function () {
    return this._diagnostico;
}
Paciente.prototype.setNombre = function (diagnostico) {
    this._diagnostico = diagnostico;
}

/* pacienteDos._setEdad('56');
console.log(pacienteDos.getEdad) */


//4. Crear un método mediante la propiedad prototype que permita buscar los datos de
//los usuarios por nombre
Consultorio.prototype.mostrarPacientes = function () {
    console.log('Lista de pacientes consultorio Comunal:')
    for (var i = 0; i < this.paciente.length; i++) {
        console.log('Nombre; ' + this.paciente[i].getNombre() + ' | ' + 'Edad: ' + this.paciente[i].getEdad() + ' | ' + 'Rut: ' + this.paciente[i].getRut() + ' | ' + 'Diagnostico: ' + this.paciente[i].getDiagnostico());
    }
};

//Crear un método que permita mostrar todos los datos de los
//usuarios registrados

Consultorio.prototype.buscarDatosPorNombre = function (nombre) {
    for (var i = 0; i < this.paciente.length; i++) {
        if (nombre == this.paciente[i].getNombre()) {
            console.log('Buscar paciente: ' + this.paciente[i].getNombre());
            console.log('Nombre: ' + this.paciente[i].getNombre() + ' | ' + 'Edad: ' + this.paciente[i].getEdad() + ' | ' + 'Rut: ' + this.paciente[i].getRut() + ' | ' + 'Diagnóstico: ' + this.paciente[i].getDiagnostico());
        }
    }
}

//Instanciar cada objeto utilizando la instrucción new
var pacienteUno = new Paciente('FRANCISCA ROJAS', 24, '9878782-1', 'COVID-19');
var pacienteDos = new Paciente('PAMELA PAVEZ', 55, '15345241-3', 'DIABETES');
var pacienteTres = new Paciente('ARMANDO LUNA', 36, '16445345-9', 'NEUMONIA');
var pacienteCuatro = new Paciente('MANUEL GODOY', 15, '17666419-0', 'GRIPE');
var pacienteCinco = new Paciente('RAMON ULLOA', 33, '14989389-K', 'HIPERTENSION');
var pacienteSeis = new Paciente('PAULA SANCHEZ', 54, '15554774-5', 'COVID-19');
var pacienteSiete = new Paciente('ANGÉLICA NAVAS', 26, '15444147-9', 'COVID-19');
var pacienteOcho = new Paciente('ANA KLAPP', 45, '17879423-9', 'CEFALEA');
var pacienteNueve = new Paciente('FELIPE MARDONES', 44, '1547423-6', 'DOLOR ABDOMINAL');
var pacienteDiez = new Paciente('DIEGO MARRE', 51, '16554741-K', 'GRIPE');
var consultorio1 = new Consultorio('Consultorio Medico Comunal', [pacienteUno, pacienteDos, pacienteTres, pacienteCuatro, pacienteCinco, pacienteSeis, pacienteSiete, pacienteOcho, pacienteNueve, pacienteDiez]);

consultorio1.mostrarPacientes();
consultorio1.buscarDatosPorNombre('PAMELA PAVEZ');
