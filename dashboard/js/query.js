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

function flotillaGraph(){

    let mes = $('#fecha_mes').val();
    let annio = $('#fecha_annio').val();
    
    $.ajax({
        type: "POST",
        url: "query/flotillaGraph.php",
        data: {
            fecha_mes: mes,
            fecha_annio: annio
        },
        dataType: "json",
        success: function(data){

            console.log(data);
            
            for (var i = 0; i < data.length; i++) {
              var municipios2 = data[i];
              let espacios2; // Variable para almacenar los espacios actuales del municipio

              if (municipios2.cantidad_espacios_intervenidos == null) {
                  espacios2 = 0;
              } else {
                espacios2 = parseInt(municipios2.cantidad_espacios_intervenidos, 10); // Usar parseFloat si hay decimales    
              }

              // Sumar al total
              espaciosTotal2 = espaciosTotal2 + espacios2; // Suma correctamente
          }

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