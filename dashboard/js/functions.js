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