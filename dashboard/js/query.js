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
            flotillaGraph();
            datosCard();
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

// function flotillaGraph(){

//     let mes = $('#fecha_mes').val();
//     let annio = $('#fecha_annio').val();
    
//     $.ajax({
//         type: "POST",
//         url: "query/flotillaGraph.php",
//         data: {
//             fecha_mes: mes,
//             fecha_annio: annio
//         },
//         dataType: "json",
//         success: function(data){

//             console.log(data);
            
//             return data;

//         }
//     });
// }

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
            console.log("Datos recibidos:", data);
            
            // Crear la gráfica con los datos recibidos
            crearGrafica(data);
        },
        error: function(xhr, status, error) {
            console.error("Error al obtener datos:", error);
        }
    });
}

function crearGrafica(data) {
    'use strict'
    
    // Verificar que los datos existen
    if (!data) {
        console.error("No hay datos:", data);
        if (window.myChartInstance) {
            window.myChartInstance.destroy();
            window.myChartInstance = null;
        }
        return;
    }
    
    // Ejemplo de cómo manipular diferentes estructuras JSON:
    let vehiculos = [];
    let cantidad = [];
    
    // CASO 1: Si viene como arrays separados (vehiculos y cantidad_economicos)
    if (data.vehiculo && data.cantidad_economico) {
        vehiculos = data.vehiculo;
        cantidad = data.cantidad_economico;
    }
    // CASO 2: Si viene como array de objetos
    else if (Array.isArray(data)) {
        // Suponiendo que data = [{vehiculo: "Toyota", cantidad: 10}, ...]
        data.forEach(item => {
            vehiculos.push(item.vehiculo);
            cantidad.push(item.cantidad_economico);
        });
    }
    // CASO 3: Si viene como objeto con propiedades dinámicas
    else {
        // Ejemplo: {"Toyota": 10, "Nissan": 5, ...}
        vehiculos = Object.keys(data);
        cantidad = Object.values(data);
    }
    
    // Validar que tengamos datos
    if (vehiculos.length === 0 || cantidad.length === 0) {
        console.error("Datos incompletos para la gráfica:", data);
        return;
    }
    
    // Destruir gráfica anterior si existe
    const ctx = document.getElementById('myChart');
    if (window.myChartInstance) {
        window.myChartInstance.destroy();
    }
    
    // Crear nueva gráfica
    window.myChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: vehiculos,
            datasets: [{
                label: 'Uso mensaual de vehículos',
                data: cantidad,
                lineTension: 0,
                backgroundColor: '#007bff' ,
                borderColor: '#007bff',
                borderWidth: 4,
                pointBackgroundColor: '#007bff'
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true
                },
                tooltip: {
                    boxPadding: 3
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Llamar al cargar la página
$(document).ready(function() {
    flotillaGraph();
});
    

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
            let vehiculosAtendidos = data.vehiculo;
            $('#vehiculosAtendidos').text(vehiculosAtendidos);
            let costoTotal = data.gasto;
            $('#costoTotal').text(costoTotal);
        }
    });
}