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

function reporteVehiculo(id) {
    $("#modalReporteVehiculo").modal("show");
    $("#modalVehiculos").modal("hide");
     let fechahoy = new Date();
     $('#fechaReporteVehiculo').val(fechahoy.toISOString().split('T')[0]);
     $('#idVehiculoReporte').val(id);
      let fechaBuscar = $('#fechaReporteVehiculo').val();

    $.ajax({
        type: "POST",
        url: "query/queryReporteVehiculoModal.php",
        data: {
            id: id,
            fecha: fechaBuscar
        },
        dataType: "html",
        success: function(data){
            $('#modalReporteVehiculoQuery').html(data);
        }
    });
}

function reporteVehiculoFecha() {
    let id = $('#idVehiculoReporte').val();
    let fechaBuscar = $('#fechaReporteVehiculo').val();

    $.ajax({
        type: "POST",
        url: "query/queryReporteVehiculoModal.php",
        data: {
            id: id,
            fecha: fechaBuscar
        },
        dataType: "html",
        success: function(data){
            $('#modalReporteVehiculoQuery').html(data);
        }
    });
}

function reporteVehiculoExcel() {
  const tabla = document.getElementById('reporteVehiculoTable');
  const html = tabla.outerHTML;
  const blob = new Blob([html], {type: 'application/vnd.ms-excel'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'reporteOtrosGastos.xls';
  a.click();
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

function reporteFlotilla(id) {
    $("#modalReporteFlotilla").modal("show");
    $("#modalFlotilla").modal("hide");
     let fechahoy = new Date();
     $('#fechaReporteFlotilla').val(fechahoy.toISOString().split('T')[0]);
     $('#idFlotillaReporte').val(id);
      let fechaBuscar = $('#fechaReporteFlotilla').val();

    $.ajax({
        type: "POST",
        url: "query/queryReporteFlotillaModal.php",
        data: {
            id: id,
            fecha: fechaBuscar
        },
        dataType: "html",
        success: function(data){
            $('#modalReporteFlotillaQuery').html(data);
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

function editarMantenimiento(id) {
    $("#modalMantenimientoEditar").modal("show");
    $("#modalMantenimiento").modal("hide");

    $.ajax({
        type: "POST",
        url: "query/queryEditarMantenimientoModal.php",
        data: {id: id},
        dataType: "json",
        success: function(data){
            $('#idMantenimientoEditar').val(data.id);
            $('#nombreMantenimientoEditar').val(data.mantenimiento);
        }
    });
}

function guardarEdicionMantenimiento() {
    let id = $('#idMantenimientoEditar').val();
    let nombreMantenimiento = $('#nombreMantenimientoEditar').val();

    if(nombreMantenimiento === ""){
        alert("Por favor, ingrese el nombre del mantenimiento.");
        return;
    }

    $.ajax({
        type: "POST",
        url: "query/prcd_editarMantenimiento.php",
        data: {
            id: id,
            nombreMantenimiento: nombreMantenimiento
        },
        dataType: "json",
        success: function(response){
            if(response.success == 1){
                alert("Mantenimiento editado exitosamente");
                $('#modalMantenimientoEditar').modal('hide');
                mantenimiento();
            } else {
                alert("No se editó el mantenimiento");
            }
        }
    });
}

function eliminarMantenimiento(id) {
    if(confirm("¿Estás seguro de que deseas eliminar este mantenimiento?")){
        $.ajax({
            type: "POST",
            url: "query/eliminarMantenimiento.php",
            data: {id: id},
            dataType: "json",
            success: function(response){
                if(response.success == 1){
                    alert("Mantenimiento eliminado exitosamente");
                    mantenimiento();
                } else {
                    alert("No se eliminó el mantenimiento");
                }
            }
        });
    }
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

function agregarProveedor() {
    let nombreProveedor = $('#nombreProveedorAgregar').val();

    if(nombreProveedor === ""){
        alert("Por favor, ingrese el nombre del proveedor.");
        return;
    }

    $.ajax({
        type: "POST",
        url: "query/prcd_agregarProveedor.php",
        data: {
            nombreProveedor: nombreProveedor
        },
        dataType: "json",
        success: function(response){
            if(response.success == 1){
                alert("Proveedor agregado exitosamente");
                $("#modalProveedorAgregar").modal("hide");
                $("#modalProveedor").modal("show");
                $('#nombreProveedorAgregar').val("");
                proveedor();
            } else {
                alert("No se agregó el proveedor");
            }
        }
    });
}

function editarProveedor(id) {
    $("#modalProveedorEditar").modal("show");
    $("#modalProveedor").modal("hide");

    $.ajax({
        type: "POST",
        url: "query/queryEditarProveedorModal.php",
        data: {id: id},
        dataType: "json",
        success: function(data){
            $('#idProveedorEditar').val(data.id);
            $('#nombreProveedorEditar').val(data.proveedor);
        }
    });
}

function guardarEdicionProveedor() {
    let id = $('#idProveedorEditar').val();
    let nombreProveedor = $('#nombreProveedorEditar').val();

    if(nombreProveedor === ""){
        alert("Por favor, ingrese el nombre del proveedor.");
        return;
    }

    $.ajax({
        type: "POST",
        url: "query/prcd_editarProveedor.php",
        data: {
            id: id,
            nombreProveedor: nombreProveedor
        },
        dataType: "json",
        success: function(response){
            if(response.success == 1){
                alert("Proveedor editado exitosamente");
                $('#modalProveedorEditar').modal('hide');
                proveedor();
            } else {
                alert("No se editó el proveedor");
            }
        }
    });
}

function eliminarProveedor(id) {
    if(confirm("¿Estás seguro de que deseas eliminar este proveedor?")){
        $.ajax({
            type: "POST",
            url: "query/eliminarProveedor.php",
            data: {id: id},
            dataType: "json",
            success: function(response){
                if(response.success == 1){
                    alert("Proveedor eliminado exitosamente");
                    proveedor();
                } else {
                    alert("No se eliminó el proveedor");
                }
            }
        });
    }
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