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
                
                $('#numEconomicoEditar').val(data.economico);
                $('#mantenimientoList').val(data.tipoMantenimiento);
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