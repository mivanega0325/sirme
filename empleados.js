//CRUD EMPLEADOS SIRME

const { act } = require("react");

// BASE DE DATOS EMPLEADOS

let empleados = [
    { id: 1, nombre: "Apolo Vanegas", cargo: "Mascota", turno: "Diurno", correo: "apolo@gmail.com"},
    { id: 2, nombre: "Mariana Lopez", cargo: "Nieta", turno: "Nocturno", correo: "marianalopez@gmail.com"},
    { id: 3, nombre: "Elena Medina", cargo: "Matrona", turno: "Diurno", correo: "elenamedina@gmail.com"},
];

//READ - Mostrar empleados

const listarEmpleados = () => {
    console.log("     === EMPLEADOS ACTUALES ===");
    console.table(empleados);
    console.log("Total de empleados:", empleados.length);
};

//listarEmpleados(empleados);

// CREATE - Agregar empleados

const agregarEmpleados = (nombre, cargo, turno, correo) => {
    const nuevoEmpleado = {
        id: Date.now(),
        nombre: nombre,
        cargo: cargo,
        turno: turno,
        correo: correo
   };
    empleados.push(nuevoEmpleado);
    console.log(`✅ Empleado '${nombre}' agregado con éxito`);
};

//agregarEmpleados("Yolanda Londoño", "Matrona", "Diurno", "yolyferry@gmail.com");

// UPDATE - Actualizar o modificar empleados

//nuevoDato

const actualizarEmpleado = (id, nuevoNombre) => {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].id === id) {      
            empleados[i].nombre = nuevoNombre;
            console.log(`🔄 Nombre del ID ${id} actualizado a: ${nuevoNombre}`);
            return;
        }
    }
    console.log(`❌ No se encontró a Empleado con ID: ${id}`);
};
//actualizarEmpleado(3, "Luz Elena");

