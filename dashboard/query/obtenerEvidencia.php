<?php
    require('qc.php');
    
    if(!isset($_POST['id_bitacora']) || empty($_POST['id_bitacora'])) {
        echo json_encode(['success' => 0, 'message' => 'ID no proporcionado']);
        exit;
    }
    
    $id_bitacora = $_POST['id_bitacora'];
    
    $sql = "SELECT * FROM evidencia WHERE id_ext = '$id_bitacora' ORDER BY fecha_subida DESC";
    $resultado = $conn->query($sql);
    
    $fotos = [];
    while($row = $resultado->fetch_assoc()) {
        $fotos[] = $row;
    }
    
    echo json_encode([
        'success' => 1,
        'fotos' => $fotos,
        'cantidad' => count($fotos)
    ]);
?>
