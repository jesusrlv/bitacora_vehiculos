function vehiculosModal() {
    $("#modalVehiculos").modal("show");
    
    $.ajax({
        type: "POST",
        url: "query/queryVehiculosModal.php",
        dataType: "html",
        success: function(data){
            $('#modalVehiculosQuery').html(data);
        }
    });
}
function modalEditarVehiculo(id) {
    $("#modalEditarVehiculo").modal("show");
    // $.ajax({
    //     type: "POST",
    //     url: "query/queryEditarVehiculoModal.php",
    //     data: {id: id},
    //     dataType: "json",
    //     success: function(data){
    //         $('#idEditar').val(data.id);
    //         $('#vehiculoEditar').val(data.vehiculo);
    //         $('#noEconomicoEditar').val(data.no_economico);
    //         $('#descripcionEditar').val(data.descripcion);
    //         $('#flotillaEditar').val(data.flotilla);
    //     }
    // });
}

function flotilla() {
    $("#modalFlotilla").modal("show");
    
    $.ajax({
        type: "POST",
        url: "query/queryFlotillaModal.php",
        dataType: "html",
        success: function(data){
            $('#modalFlotillaQuery').html(data);
        }
    });
}

function mantenimiento() {
     $("#modalMantenimiento").modal("show");
    $.ajax({
        type: "POST",
        url: "query/mantenimiento.php",
        dataType: "html",
        success: function(data){
            $('#modalMantenimientoQuery').html(data);
        }
    });
}

function proveedor() {
     $("#modalProveedor").modal("show");
    $.ajax({
        type: "POST",
        url: "query/proveedor.php",
        dataType: "html",
        success: function(data){
            $('#modalProveedorQuery').html(data);
        }
    });
}

function costo() {
     $("#modalCosto").modal("show");
    $.ajax({
        type: "POST",
        url: "query/costo.php",
        dataType: "html",
        success: function(data){
            $('#costo').html(data);
        }
    });
}