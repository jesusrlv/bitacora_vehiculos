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

function modalEditarVehiculo(id) {
    $("#modalEditarVehiculo").modal("show");
    $("#modalVehiculos").modal("hide");
    flotillaEditar();

    $.ajax({
        type: "POST",
        url: "query/queryEditarVehiculoModal.php",
        data: {id: id},
        dataType: "json",
        success: function(data){
            $('#idEditarVehiculo').val(data.id);
            $('#vehiculoEditar').val(data.vehiculo);
            $('#noEconomicoEditar').val(data.no_economico);
            $('#descripcionEditar').val(data.descripcion);
            $('#flotillaEditar').val(data.flotilla);
        },
        error: function(xhr, status, error) {
            console.error("Error al obtener datos del vehículo:", error);
        }
    });
}

function editarVehiculo() {
    let id = $('#idEditarVehiculo').val();
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
                // modalEditarVehiculo(id);
                vehiculosModal();
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
function flotillaEditar() {
    
    $.ajax({
        type: "POST",
        url: "query/flotillaAgregar.php",
        dataType: "html",
        success: function(data){
            $('#flotillaEditar').html(data);
        }
    });
}

function modalEditarFlotilla(id) {
    $("#modalFlotillaEditar").modal("show");
    $("#modalFlotilla").modal("hide");

    $.ajax({
        type: "POST",
        url: "query/queryEditarFlotillaModal.php",
        data: {id: id},
        dataType: "json",
        success: function(data){
            let success = data.success;
            if(success = "1"){
                $('#idFlotillaEditar').val(data.id);
                $('#nombreFlotillaEditar').val(data.flotilla);
            } else {
                alert("Error al obtener el registro");
            }   
        }
    });
}

function editarFlotilla() {
    let id = $('#idFlotillaEditar').val();
    let nombreFlotilla = $('#nombreFlotillaEditar').val();

    if(nombreFlotilla === ""){
        alert("Por favor, ingrese el nombre de la flotilla.");
        return;
    }

    $.ajax({
        type: "POST",
        url: "query/prcd_editarFlotilla.php",
        data: {
            id: id,
            nombreFlotilla: nombreFlotilla
        },
        dataType: "json",
        success: function(response){
            if(response.success == 1){
                alert("Flotilla editada exitosamente");
                $('#modalFlotillaEditar').modal('hide');
                flotilla();
            } else {
                alert("No se editó la flotilla");
            }
        }
    });
}

function eliminarFlotilla(id) {
    if(confirm("¿Estás seguro de que deseas eliminar esta flotilla?")){
        $.ajax({
            type: "POST",
            url: "query/eliminarFlotilla.php",
            data: {id: id},
            dataType: "json",
            success: function(response){
                if(response.success == 1){
                    alert("Flotilla eliminada exitosamente");
                    flotilla();
                } else {
                    alert("No se eliminó la flotilla");
                }
            }
        });
    }
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

function agregarMantenimiento() {
    let nombreMantenimiento = $('#nombreMantenimientoAgregar').val();

    if(nombreMantenimiento === ""){
        alert("Por favor, ingrese el nombre del mantenimiento.");
        return;
    }

    $.ajax({
        type: "POST",
        url: "query/prcd_agregarMantenimiento.php",
        data: {
            nombreMantenimiento: nombreMantenimiento
        },
        dataType: "json",
        success: function(response){
            if(response.success == 1){
                alert("Mantenimiento agregado exitosamente");
                $("#modalMantenimientoAgregar").modal("hide");
                mantenimiento();
            }
        }
    });
}


function agregarFlotilla() {
    let nombreFlotilla = $('#nombreFlotillaAgregar').val();

    if(nombreFlotilla === ""){
        alert("Por favor, ingrese el nombre de la flotilla.");
        return;
    }

    $.ajax({
        type: "POST",
        url: "query/prcd_agregarFlotilla.php",
        data: {
            nombreFlotilla: nombreFlotilla
        },
        dataType: "json",
        success: function(response){
            if(response.success == 1){
                alert("Flotilla agregada exitosamente");
                $("#modalFlotillaAgregar").modal("hide");
                $("#modalFlotilla").modal("show");
                $('#nombreFlotillaAgregar').val("");
                flotilla();
            } else {
                alert("No se agregó la flotilla");
            }
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