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


function flotilla(){
    
    $.ajax({
        type: "POST",
        url: "query/flotilla.php",
        dataType: "html",
        success: function(data){
            $('#flotilla').html(data);
        }
    });
}

flotilla();

function datosCard(){
    
    let mes = $('#fecha_mes').val();
    let annio = $('#fecha_annio').val();
    $.ajax({
        type: "POST",
        data: {
            fecha_mes: mes,
            fecha_annio: annio
        },
        url: "query/cards.php",
        dataType: "json",
        success: function(data){
            $('#datosBitacora').html(data);
        }
    });
}