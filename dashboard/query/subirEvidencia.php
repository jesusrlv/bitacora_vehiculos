<?php
    require('qc.php');
    
    // Validar que la solicitud sea POST
    if($_SERVER['REQUEST_METHOD'] !== 'POST') {
        echo json_encode(['success' => 0, 'message' => 'Método no permitido']);
        exit;
    }
    
    // Validar que se envíe el ID de bitácora
    if(!isset($_POST['id_bitacora']) || empty($_POST['id_bitacora'])) {
        echo json_encode(['success' => 0, 'message' => 'ID de bitácora no proporcionado']);
        exit;
    }
    
    $id_bitacora = $_POST['id_bitacora'];
    
    // Validar que se carguen archivos
    if(!isset($_FILES['fotos']) || empty($_FILES['fotos']['name'][0])) {
        echo json_encode(['success' => 0, 'message' => 'No se enviaron archivos']);
        exit;
    }
    
    // Obtener datos de la bitácora para nombres
    $sqlBitacora = $conn->query("SELECT * FROM bitacora WHERE id = '$id_bitacora'");
    $datoBitacora = $sqlBitacora->fetch_assoc();
    
    if(!$datoBitacora) {
        echo json_encode(['success' => 0, 'message' => 'Bitácora no encontrada']);
        exit;
    }
    
    // Crear directorio si no existe
    $fecha = $datoBitacora['fecha_mantenimiento'];
    $carpeta_evidencia = '../../evidencia_fotos/' . date('Y/m/', strtotime($fecha));
    
    if(!is_dir($carpeta_evidencia)) {
        mkdir($carpeta_evidencia, 0777, true);
    }
    
    $archivos_exitosos = 0;
    $errores = [];
    
    // Procesar cada archivo
    foreach($_FILES['fotos']['name'] as $key => $nombre_archivo) {
        
        // Validar extensión
        $extension = strtolower(pathinfo($nombre_archivo, PATHINFO_EXTENSION));
        $extensiones_permitidas = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
        
        if(!in_array($extension, $extensiones_permitidas)) {
            $errores[] = $nombre_archivo . ' - Extensión no permitida';
            continue;
        }
        
        // Validar tamaño (máximo 5MB)
        if($_FILES['fotos']['size'][$key] > 5242880) {
            $errores[] = $nombre_archivo . ' - Archivo demasiado grande (máximo 5MB)';
            continue;
        }
        
        // Generar nombre único para la foto
        $nombre_nuevo = 'bitacora_' . $id_bitacora . '_' . time() . '_' . rand(1000, 9999) . '.' . $extension;
        $ruta_archivo = $carpeta_evidencia . $nombre_nuevo;
        
        // Mover archivo y optimizar para web
        if(move_uploaded_file($_FILES['fotos']['tmp_name'][$key], $ruta_archivo)) {
            // Optimizar imagen para web (reducir tamaño)
            if($extension !== 'gif') {
                $imagen = null;
                switch($extension) {
                    case 'jpg':
                    case 'jpeg':
                        $imagen = imagecreatefromjpeg($ruta_archivo);
                        break;
                    case 'png':
                        $imagen = imagecreatefrompng($ruta_archivo);
                        break;
                    case 'webp':
                        $imagen = imagecreatefromwebp($ruta_archivo);
                        break;
                }
                
                if($imagen) {
                    // Reducir calidad y tamaño
                    if($extension === 'png') {
                        imagepng($imagen, $ruta_archivo, 8);
                    } else {
                        imagejpeg($imagen, $ruta_archivo, 75);
                    }
                    imagedestroy($imagen);
                }
            }
            
            // Guardar registro en BD
            $fecha_subida = date('Y-m-d H:i:s');
            $sql = "INSERT INTO evidencia (id_ext, fileP, fecha_subida) VALUES ('$id_bitacora', '$nombre_nuevo', '$fecha_subida')";
            
            if($conn->query($sql)) {
                $archivos_exitosos++;
            } else {
                $errores[] = $nombre_archivo . ' - Error al guardar en BD';
                unlink($ruta_archivo);
            }
        } else {
            $errores[] = $nombre_archivo . ' - Error al subir el archivo';
        }
    }
    
    $mensaje = "Se subieron $archivos_exitosos archivo(s) exitosamente";
    if(!empty($errores)) {
        $mensaje .= '. Errores: ' . implode(', ', $errores);
    }
    
    echo json_encode([
        'success' => $archivos_exitosos > 0 ? 1 : 0,
        'message' => $mensaje,
        'archivos_subidos' => $archivos_exitosos
    ]);
?>
