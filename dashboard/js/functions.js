function altaBitacora(){
    
    let dia = new Date().getDate(); // Obtener el día actual
    let mes = new Date().getMonth() + 1; // Obtener el mes actual (0-11, por eso se suma 1)
    let annio = new Date().getFullYear(); // Obtener el año actual
    // Formatear la fecha en formato YYYY-MM-DD
    let fechaActual = `${annio}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
    $('#fechaMantenimiento').val(fechaActual);
    $('fechaMantenimiento').attr('max', fechaActual);
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
    $.ajax({
        type: "POST",
        url: "query/queryVehiculos.php",
        dataType: "html",
        success: function(data){
            $('#numEconomico').html(data);
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
    let flotilla = $('#numEconomico option:selected').data('vehiculo');

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
            numEconomico: numEconomico,
            flotilla: flotilla
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

function exportarTabla() {
  const tabla = document.getElementById('tablaExportar');
  const html = tabla.outerHTML;
  const blob = new Blob([html], {type: 'application/vnd.ms-excel'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'reporteBitacora.xls';
  a.click();
}

function reporteFlotillaExcel() {
  const tabla = document.getElementById('reporteFlotillaTable');
  const html = tabla.outerHTML;
  const blob = new Blob([html], {type: 'application/vnd.ms-excel'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'reporteFlotilla.xls';
  a.click();
}

// FUNCIONES DE EVIDENCIA DE FOTOS

function abrirModalEvidencia(id_bitacora) {
    $("#modalEvidenciaFotos").modal("show");
    $('#idBitacoraEvidencia').val(id_bitacora);
    cargarEvidencia(id_bitacora);
}

function cargarEvidencia(id_bitacora) {
    $.ajax({
        type: "POST",
        url: "query/obtenerEvidencia.php",
        data: {
            id_bitacora: id_bitacora
        },
        dataType: "json",
        success: function(data) {
            if(data.success == 1 && data.cantidad > 0) {
                let html = '<div class="row">';
                data.fotos.forEach(function(foto) {
                    const año = foto.fecha_subida.substring(0, 4);
                    const mes = foto.fecha_subida.substring(5, 7);
                    html += `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <img src="../evidencia_fotos/${año}/${mes}/${foto.fileP}" class="card-img-top" alt="Evidencia">
                            <div class="card-body p-2">
                                <small class="text-muted">${foto.fecha_subida}</small>
                                <button class="btn btn-danger btn-sm w-100 mt-2" onclick="eliminarFoto(${foto.id})">
                                    <i class="bi bi-trash"></i> Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                    `;
                });
                html += '</div>';
                $('#contenedorEvidencia').html(html);
            } else {
                $('#contenedorEvidencia').html('<p class="text-center text-muted">No hay evidencia aún</p>');
            }
        }
    });
}

function subirEvidencia() {
    let id_bitacora = $('#idBitacoraEvidencia').val();
    let archivos = document.getElementById('inputFotos').files;
    
    if(archivos.length === 0) {
        alert("Por favor, selecciona al menos una foto");
        return;
    }
    
    let formData = new FormData();
    formData.append('id_bitacora', id_bitacora);
    
    for(let i = 0; i < archivos.length; i++) {
        formData.append('fotos[]', archivos[i]);
    }
    
    $.ajax({
        type: "POST",
        url: "query/subirEvidencia.php",
        data: formData,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function(response) {
            if(response.success == 1) {
                alert(response.message);
                document.getElementById('inputFotos').value = '';
                cargarEvidencia(id_bitacora);
            } else {
                alert("Error: " + response.message);
            }
        },
        error: function() {
            alert("Error en la carga de archivos");
        }
    });
}

function eliminarFoto(id_foto) {
    if(confirm("¿Estás seguro de eliminar esta foto?")) {
        $.ajax({
            type: "POST",
            url: "query/eliminarFoto.php",
            data: {
                id_foto: id_foto
            },
            dataType: "json",
            success: function(response) {
                if(response.success == 1) {
                    alert("Foto eliminada exitosamente");
                    let id_bitacora = $('#idBitacoraEvidencia').val();
                    cargarEvidencia(id_bitacora);
                }
            }
        });
    }
}

function descargarEvidenciaZip() {
    let fecha_mes = document.getElementById('fecha_mes').value;
    let fecha_annio = document.getElementById('fecha_annio').value;
    
    if(fecha_mes === "" || fecha_annio === "") {
        alert("Por favor, selecciona mes y año");
        return;
    }
    
    // Crear un formulario temporal para descargar
    let form = document.createElement('form');
    form.method = 'POST';
    form.action = 'query/descargarEvidenciaZip.php';
    
    let inputMes = document.createElement('input');
    inputMes.type = 'hidden';
    inputMes.name = 'fecha_mes';
    inputMes.value = fecha_mes;
    
    let inputAnnio = document.createElement('input');
    inputAnnio.type = 'hidden';
    inputAnnio.name = 'fecha_annio';
    inputAnnio.value = fecha_annio;
    
    form.appendChild(inputMes);
    form.appendChild(inputAnnio);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
}

function descargarEvidenciaZipBitacora() {
    let id_bitacora = document.getElementById('idBitacoraEvidencia').value;
    
    if(id_bitacora === "" || !id_bitacora) {
        alert("No hay bitácora seleccionada");
        return;
    }
    
    // Crear un formulario temporal para descargar
    let form = document.createElement('form');
    form.method = 'POST';
    form.action = 'query/descargarEvidenciaZipBitacora.php';
    
    let inputId = document.createElement('input');
    inputId.type = 'hidden';
    inputId.name = 'id_bitacora';
    inputId.value = id_bitacora;
    
    form.appendChild(inputId);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
}