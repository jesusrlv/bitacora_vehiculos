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

function modalAgregarVehiculo() {
    $("#modalVehiculos").modal("hide");
    $("#modalAgregarVehiculo").modal("show");
flotillaAgregar();
}

function cerrarModalAgregarVehiculo() {
    $("#modalAgregarVehiculo").modal("hide");
    modalAgregarVehiculo();
}

function guardarVehiculo() {
    let vehiculo = $('#vehiculoAgregar').val();
    let noEconomico = $('#noEconomicoAgregar').val();
    let descripcion = $('#descripcionAgregar').val();
    let flotilla = $('#flotillaAgregar').val();

    if(vehiculo === "" || noEconomico === "" || descripcion === "" || flotilla === ""){
        alert("Por favor, complete todos los campos antes de guardar.");
        return;
    }

    $.ajax({
        type: "POST",
        url: "query/prcd_guardarVehiculo.php",
        data: {
            vehiculo: vehiculo,
            noEconomico: noEconomico,
            descripcion: descripcion,
            flotilla: flotilla
        },
        dataType: "json",
        success: function(response){
            if(response.success == 1){
                alert("Vehículo guardado exitosamente");
                $('#modalAgregarVehiculo').modal('hide');
                vehiculosModal();
            } else {
                alert("No se guardó el vehículo");
                console.error("Error al guardar vehículo:", response.error);
            }
        }
    });
}
function editarVehiculo() {
    let id = $('#idEditar').val();
    let vehiculo = $('#vehiculoEditar').val();
    let noEconomico = $('#noEconomicoEditar').val();
    let descripcion = $('#descripcionEditar').val();
    let flotilla = $('#flotillaEditar').val();

    if(vehiculo === "" || noEconomico === "" || descripcion === "" || flotilla === ""){
        alert("Por favor, complete todos los campos antes de guardar.");
        return;
    }

    $.ajax({
        type: "POST",
        url: "query/prcd_editarVehiculo.php",
        data: {
            id: id,
            vehiculo: vehiculo,
            noEconomico: noEconomico,
            descripcion: descripcion,
            flotilla: flotilla
        },
        dataType: "json",
        success: function(response){
            if(response.success == 1){
                alert("Vehículo editado exitosamente");
                $('#modalEditarVehiculo').modal('hide');
                modalEditarVehiculo(id);
            } else {
                alert("No se editó el vehículo");
            }
        }
    });
}

function eliminarVehiculo(id) {
    if(confirm("¿Estás seguro de que deseas eliminar este vehículo?")){
        $.ajax({
            type: "POST",
            url: "query/eliminarVehiculo.php",
            data: {id: id},
            dataType: "json",
            success: function(response){
                if(response.success == 1){
                    alert("Vehículo eliminado exitosamente");
                    vehiculosModal();
                } else {
                    alert("No se eliminó el vehículo");
                }
            }
        });
    }
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
function flotillaAgregar() {
    
    $.ajax({
        type: "POST",
        url: "query/flotillaAgregar.php",
        dataType: "html",
        success: function(data){
            $('#flotillaAgregar').html(data);
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