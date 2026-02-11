function altaBitacora(){
    $('#altaBitacoraModal').modal('show');
    $.ajax({
        type: "POST",
        url: "query/queryProveedor.php",
        dataType: "html",
        success: function(data){
            $('#proveedorList').html(data);
        }
    });
    $.ajax({
        type: "POST",
        url: "query/queryMantenimiento.php",
        dataType: "html",
        success: function(data){
            $('#mantenimientoList').html(data);
        }
    });
}

function guardarBitacora(){
    let proveedor = $('#proveedorList').val();
    let mantenimiento = $('#mantenimientoList').val();
    let ordenServicio = $('#ordenServicio').val();
    let kilometraje = $('#kilometraje').val();
    let costo = $('#costo').val();
    let fechaMantenimiento = $('#fechaMantenimiento').val();
    let numEconomico = $('#numEconomico').val();

    if(proveedor === "" || mantenimiento === "" || ordenServicio === "" || kilometraje === "" || costo === "" || fechaMantenimiento === "" || numEconomico === ""){
        alert("Por favor, complete todos los campos antes de guardar.");
        return;
    }

    $.ajax({
        type: "POST",
        url: "query/prcd_guardarBitacora.php",
        data: {
            proveedor: proveedor,
            mantenimiento: mantenimiento,
            ordenServicio: ordenServicio,
            kilometraje: kilometraje,
            costo: costo,
            fechaMantenimiento: fechaMantenimiento,
            numEconomico: numEconomico
        },
        dataType: "json",
        success: function(response){
            if(response.success == 1){
                alert("Bitácora guardada exitosamente");
                
                document.getElementById('proveedorList').value = "";
                document.getElementById('mantenimientoList').value = "";
                document.getElementById('ordenServicio').value = "";
                document.getElementById('kilometraje').value = "";
                document.getElementById('costo').value = "";
                document.getElementById('fechaMantenimiento').value = "";
                document.getElementById('numEconomico').value = "";

                $('#altaBitacoraModal').modal('hide');
            } else {
                alert("Error al guardar la bitácora: " + response.message);
                console.error("Error en la respuesta del servidor:", response.error);
            }
        },
        error: function(xhr, status, error){
            alert("Error en la solicitud AJAX: " + error);
        }
    });
}