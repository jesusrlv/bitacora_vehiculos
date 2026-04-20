<?php
    require('qc.php');
    
    if(!isset($_POST['fecha_mes']) || !isset($_POST['fecha_annio'])) {
        echo json_encode(['success' => 0, 'message' => 'Parámetros incompletos']);
        exit;
    }
    
    $mes = str_pad($_POST['fecha_mes'], 2, '0', STR_PAD_LEFT);
    $annio = $_POST['fecha_annio'];
    
    // Buscar todas las bitácoras del mes
    $sql = "SELECT id FROM bitacora WHERE MONTH(fecha_mantenimiento) = '$mes' AND YEAR(fecha_mantenimiento) = '$annio'";
    $resultado = $conn->query($sql);
    
    $ids_bitacora = [];
    while($row = $resultado->fetch_assoc()) {
        $ids_bitacora[] = $row['id'];
    }
    
    if(empty($ids_bitacora)) {
        echo json_encode(['success' => 0, 'message' => 'No hay registros en este mes']);
        exit;
    }
    
    // Obtener evidencia de esas bitácoras
    $ids_string = implode(',', $ids_bitacora);
    $sql_evidencia = "SELECT * FROM evidencia WHERE id_ext IN ($ids_string)";
    $resultado_evidencia = $conn->query($sql_evidencia);
    
    if($resultado_evidencia->num_rows === 0) {
        echo json_encode(['success' => 0, 'message' => 'No hay evidencia disponible']);
        exit;
    }
    
    // Crear ZIP
    
    //require 'vendor/autoload.php'; // Para usar PHPZip si está disponible
    
    // Usar ZipArchive nativa de PHP
    $zip = new ZipArchive();
    $nombre_zip = 'evidencia_' . $annio . '_' . $mes . '_' . time() . '.zip';
    $ruta_zip = sys_get_temp_dir() . '/' . $nombre_zip;
    
    if($zip->open($ruta_zip, ZipArchive::CREATE | ZipArchive::OVERWRITE) !== true) {
        echo json_encode(['success' => 0, 'message' => 'Error al crear ZIP']);
        exit;
    }
    
    // Agregar fotos al ZIP
    while($row = $resultado_evidencia->fetch_assoc()) {
        $ruta_foto = '../../evidencia_fotos/' . substr($row['fecha_subida'], 0, 4) . '/' . substr($row['fecha_subida'], 5, 2) . '/' . $row['fileP'];
        
        if(file_exists($ruta_foto)) {
            // Estructura carpeta por bitácora dentro del ZIP
            $nombre_en_zip = 'Bitacora_' . $row['id_ext'] . '/' . $row['fileP'];
            $zip->addFile($ruta_foto, $nombre_en_zip);
        }
    }
    
    $zip->close();
    
    // Enviar archivo
    if(file_exists($ruta_zip)) {
        header('Content-Type: application/zip');
        header('Content-Disposition: attachment; filename="' . $nombre_zip . '"');
        header('Content-Length: ' . filesize($ruta_zip));
        readfile($ruta_zip);
        unlink($ruta_zip);
    } else {
        echo json_encode(['success' => 0, 'message' => 'Error al generar ZIP']);
    }
    exit;
?>
