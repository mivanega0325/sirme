
// ======================================================
//         C R U D  EMPLEADOS SIRME
// ======================================================

// ============  BASE DE DATOS INICIAL DE EMPLEADOS =============

let empleados = [
    { id: 1, nombre: "Apolo Vanegas", cargo: "Mascota", turno: "Diurno", correo: "apolo@gmail.com"},
    { id: 2, nombre: "Mariana Lopez", cargo: "Nieta", turno: "Nocturno", correo: "marianalopez@gmail.com"},
    { id: 3, nombre: "Elena Medina", cargo: "Matrona", turno: "Diurno", correo: "elenamedina@gmail.com"},
];

// ===========================================
//   READ - Listar o Mostrar los Empleados
// ===========================================

const listarEmpleados = () => {
    console.log("     === EMPLEADOS ACTUALES ===");
    console.table(empleados);
    console.log("Total de empleados:", empleados.length);
};

// ===========================================
//      CREATE - Agregar empleados
// ===========================================

const agregarEmpleados = (nombre, cargo, turno, correo) => {
    const nuevoEmpleado = {
        id: Math.floor(),
        nombre: nombre,
        cargo: cargo,
        turno: turno,
        correo: correo
   };
    empleados.push(nuevoEmpleado);
    console.log(`✅ Empleado '${nombre}' agregado con éxito`);
};


// ===============================================
//   UPDATE - Actualizar o modificar empleados
// ===============================================

const actualizarEmpleado = (id, nuevoNombre, nuevoCargo, nuevoTurno, nuevoCorreo) => {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].id === id) {      
            empleados[i].nombre = nuevoNombre;
             empleados[i].cargo = nuevoCargo;
            empleados[i].turno = nuevoTurno;
            empleados[i].correo = nuevoCorreo;
            console.log(`🔄 Nombre del ID ${id} actualizado a: ${nuevoNombre} , ${nuevoCargo} , ${nuevoTurno} , ${nuevoCorreo}`);
            return;
        }
    }
    console.log(`❌ No se encontró el Empleado con ID: ${id}`);
};


// ===========================================
//     DELETE - Eliminar un empleado
// ===========================================

const eliminarEmpleado = (id) => {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].id === id) {
            const nombre = empleados[i].nombre;
            empleados.splice(i, 1);
            console.log(`🗑️  Empleado '${nombre}' Eliminado exitosamente`);
            return;
        }
    }
    console.log(`❌ No se encontró el Empleado con ID: ${id}`);
};

// READ: ver el estado inicial
listarEmpleados(empleados);

// CREATE: agregar un nuevo producto
agregarEmpleados("Yolanda Londoño", "Matrona", "Diurno", "yolyferry@gmail.com");
listarEmpleados(empleados);

// UPDATE: cambiar el precio del ID 1
actualizarEmpleado(2, "Isabella Lopez", "Nietecita", "Diurno", "isabella@gmail.com");
listarEmpleados(empleados);

// DELETE: eliminar el ID 2
eliminarEmpleado(3);

// READ final: ver el inventario sin el producto eliminado
listarEmpleados(empleados);
