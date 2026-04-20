<?php
    require('qc.php');
    
    if(!isset($_POST['id_bitacora']) || empty($_POST['id_bitacora'])) {
        echo json_encode(['success' => 0, 'message' => 'ID no proporcionado']);
        exit;
    }
    
    $id_bitacora = $_POST['id_bitacora'];
    
    $sql = "SELECT * FROM evidencia_fotos WHERE id_bitacora = '$id_bitacora'";
    $resultado = $conn->query($sql);
    
    if($resultado->num_rows === 0) {
        echo json_encode(['success' => 0, 'message' => 'No hay evidencia para eliminar']);
        exit;
    }
    
    while($row = $resultado->fetch_assoc()) {
        $ruta_foto = '../../../evidencia_fotos/' . $row['ruta_foto'];
        // Buscar el archivo en carpetas de fechas
        $año = substr($row['fecha_subida'], 0, 4);
        $mes = substr($row['fecha_subida'], 5, 2);
        $ruta_foto = '../../../evidencia_fotos/' . $año . '/' . $mes . '/' . $row['ruta_foto'];
        
        if(file_exists($ruta_foto)) {
            unlink($ruta_foto);
        }
        
        $sql_delete = "DELETE FROM evidencia_fotos WHERE id = '" . $row['id'] . "'";
        $conn->query($sql_delete);
    }
    
    echo json_encode(['success' => 1, 'message' => 'Evidencia eliminada exitosamente']);
?>
