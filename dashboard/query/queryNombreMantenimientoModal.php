<?php
    require('qc.php');
    
    $id = $_POST['id'];
    
    $sql = "SELECT * FROM mantenimiento WHERE id = '$id'";
    $resultado = $conn->query($sql);
    $row = $resultado->fetch_assoc();
    
    if($row) {
        echo json_encode(array(
            'nombreMantenimiento' => $row['tipo_mantenimiento']
        ));
    } else {
        echo json_encode(array(
            'nombreMantenimiento' => 'No encontrado'
        ));
    }
?>
