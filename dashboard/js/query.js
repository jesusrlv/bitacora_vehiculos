function bitacora(){
    let mes = $('#fecha_mes').val();
    let annio = $('#fecha_annio').val();
    $.ajax({
        type: "POST",
        data: {
            fecha_mes: mes,
            fecha_annio: annio
        },
        url: "query/bitacora.php",
        dataType: "html",
        success: function(data){
            $('#datosBitacora').html(data);
        }
    });
}

bitacora();

