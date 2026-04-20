<?php
    require('qc.php');
    
    if(!isset($_POST['id_foto']) || empty($_POST['id_foto'])) {
        echo json_encode(['success' => 0, 'message' => 'ID de foto no proporcionado']);
        exit;
    }
    
    $id_foto = $_POST['id_foto'];
    
    // Obtener datos de la foto
    $sql = "SELECT * FROM evidencia WHERE id = '$id_foto'";
    $resultado = $conn->query($sql);
    $foto = $resultado->fetch_assoc();
    
    if(!$foto) {
        echo json_encode(['success' => 0, 'message' => 'Foto no encontrada']);
        exit;
    }
    
    // Eliminar archivo físico
    $año = substr($foto['fecha_subida'], 0, 4);
    $mes = substr($foto['fecha_subida'], 5, 2);
    $ruta_foto = '../../evidencia_fotos/' . $año . '/' . $mes . '/' . $foto['fileP'];
    
    if(file_exists($ruta_foto)) {
        unlink($ruta_foto);
    }
    
    // Eliminar registro de BD
    $sql_delete = "DELETE FROM evidencia WHERE id = '$id_foto'";
    
    if($conn->query($sql_delete)) {
        echo json_encode(['success' => 1, 'message' => 'Foto eliminada exitosamente']);
    } else {
        echo json_encode(['success' => 0, 'message' => 'Error al eliminar de la BD']);
    }
?>
