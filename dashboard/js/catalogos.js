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

function flotilla() {
    $("#modalFlotilla").modal("show");
    
    $.ajax({
        type: "POST",
        url: "query/flotillaModal.php",
        dataType: "html",
        success: function(data){
            $('#flotilla').html(data);
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
            $('#mantenimiento').html(data);
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
            $('#proveedor').html(data);
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