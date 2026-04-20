<?php
    require('qc.php');
    
    if(!isset($_POST['id_bitacora']) || empty($_POST['id_bitacora'])) {
        http_response_code(400);
        echo json_encode(['success' => 0, 'message' => 'ID no proporcionado']);
        exit;
    }
    
    $id_bitacora = $_POST['id_bitacora'];
    
    // Verificar que ZipArchive esté disponible
    if(!class_exists('ZipArchive')) {
        http_response_code(500);
        echo json_encode(['success' => 0, 'message' => 'ZipArchive no está habilitada en el servidor']);
        exit;
    }
    
    // Obtener evidencia de esa bitácora específica
    $sql_evidencia = "SELECT * FROM evidencia WHERE id_ext = '$id_bitacora'";
    $resultado_evidencia = $conn->query($sql_evidencia);
    
    if($resultado_evidencia->num_rows === 0) {
        http_response_code(404);
        echo json_encode(['success' => 0, 'message' => 'No hay evidencia disponible para esta bitácora']);
        exit;
    }
    
    // Obtener datos de la bitácora para nombre del ZIP
    $sql_bitacora = "SELECT * FROM bitacora WHERE id = '$id_bitacora'";
    $resultado_bitacora = $conn->query($sql_bitacora);
    $bitacora = $resultado_bitacora->fetch_assoc();
    
    // Obtener el directorio actual
    $dir_actual = dirname(__FILE__);
    $dir_padre = dirname(dirname($dir_actual));
    $dir_temporal = $dir_padre . '/temp_zip';
    
    // Crear carpeta temporal si no existe
    if(!is_dir($dir_temporal)) {
        mkdir($dir_temporal, 0755, true);
    }
    
    // Crear ZIP con ruta absoluta
    $zip = new ZipArchive();
    $nombre_zip = 'evidencia_bitacora_' . $id_bitacora . '_' . date('Ymd_His') . '.zip';
    $ruta_zip = $dir_temporal . '/' . $nombre_zip;
    
    $open_result = $zip->open($ruta_zip, ZipArchive::CREATE | ZipArchive::OVERWRITE);
    if($open_result !== true) {
        http_response_code(500);
        echo json_encode(['success' => 0, 'message' => 'Error al crear ZIP: ' . $open_result]);
        exit;
    }
    
    // Agregar fotos al ZIP
    $contador = 0;
    while($row = $resultado_evidencia->fetch_assoc()) {
        $año = substr($row['fecha_subida'], 0, 4);
        $mes = substr($row['fecha_subida'], 5, 2);
        $ruta_foto = $dir_padre . '/evidencia_fotos/' . $año . '/' . $mes . '/' . $row['fileP'];
        
        if(file_exists($ruta_foto)) {
            // Agregar foto directamente sin subcarpetas
            $nombre_en_zip = $row['fileP'];
            $zip->addFile($ruta_foto, $nombre_en_zip);
            $contador++;
        }
    }
    
    $zip->close();
    
    // Verificar que el ZIP se creó correctamente
    if(!file_exists($ruta_zip)) {
        http_response_code(500);
        echo json_encode(['success' => 0, 'message' => 'Error al generar ZIP']);
        exit;
    }
    
    // Enviar archivo para descarga
    header('Content-Type: application/zip');
    header('Content-Disposition: attachment; filename="' . $nombre_zip . '"');
    header('Content-Length: ' . filesize($ruta_zip));
    header('Cache-Control: no-cache, no-store, must-revalidate');
    readfile($ruta_zip);
    
    // Eliminar archivo temporal después de enviarlo
    unlink($ruta_zip);
    
    // Limpiar carpeta temporal si está vacía
    if(is_dir($dir_temporal) && count(scandir($dir_temporal)) == 2) {
        rmdir($dir_temporal);
    }
    
    exit;
?>

