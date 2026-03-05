function datosBitacora(){
    $.ajax({
        type: "POST",
        url: "query/queryProveedor.php",
        dataType: "html",
        success: function(data){
            $('#proveedorListEditar').html(data);
        }
    });
    $.ajax({
        type: "POST",
        url: "query/queryMantenimiento.php",
        dataType: "html",
        success: function(data){
            $('#mantenimientoListEditar').html(data);
        }
    });
}

function readDatos() {
}


function editarRegistro(id) {
   $("#editarBitacoraModal").modal("show");
   datosBitacora();
   $.ajax({
        type: "POST",
        data: {
            id: id
        },
        url: "query/obtenerRegistro.php",
        dataType: "json",
        success: function(data){
            let success = data.success;
            if(success){
                $('#idBitacoraEditar').val(data.id);
                $('#numEconomicoEditar').val(data.economico);
                $('#mantenimientoListEditar').val(data.tipoMantenimiento);
                $('#ordenServicioEditar').val(data.ordenServicio);
                $('#kilometrajeEditar').val(data.km);
                $('#proveedorListEditar').val(data.proveedor);
                $('#costoEditar').val(data.costo);
                $('#fechaMantenimientoEditar').val(data.fecha);
            } else {
                alert("Error al obtener el registro");
            }
        }
    });
}

function editarBitacora(){
    let id = $('#idBitacoraEditar').val();
    let numEconomico = $('#numEconomicoEditar').val();
    let mantenimiento = $('#mantenimientoListEditar').val();
    let ordenServicio = $('#ordenServicioEditar').val();
    let kilometraje = $('#kilometrajeEditar').val();
    let proveedor = $('#proveedorListEditar').val();
    let costo = $('#costoEditar').val();
    let fechaMantenimiento = $('#fechaMantenimientoEditar').val();

    if(numEconomico === "" || mantenimiento === "" || ordenServicio === "" || kilometraje === "" || proveedor === "" || costo === "" || fechaMantenimiento === ""){
        alert("Por favor, complete todos los campos antes de guardar.");
        return;
    }
    $.ajax({
        type: "POST",
        url: "query/prcd_editarBitacora.php",
        data: {
            numEconomico: numEconomico,
            mantenimiento: mantenimiento,
            ordenServicio: ordenServicio,
            kilometraje: kilometraje,
            proveedor: proveedor,
            costo: costo,
            fechaMantenimiento: fechaMantenimiento
        },
        dataType: "json",
        success: function(response){
            if(response.success == 1){
                alert("Bitácora editada exitosamente");
                $('#editarBitacoraModal').modal('hide');
                bitacora();
            } else {
                alert("Error al editar la bitácora");
            }
        }
    });
}

function eliminarRegistro(id) {
    if (confirm("¿Estás seguro de eliminar este registro?")) {
        $.ajax({
        type: "POST",
        data: {
            id: id
        },
        url: "query/eliminarRegistro.php",
        dataType: "json",
        success: function(data){
            let success = data.success;
            if(success){
                alert("Registro eliminado correctamente");
                bitacora()
            } else {
                alert("Error al eliminar el registro");
            }
        }
    });
    }
}