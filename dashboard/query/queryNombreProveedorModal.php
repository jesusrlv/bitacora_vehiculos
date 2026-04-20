<?php
    require('qc.php');
    
    $id = $_POST['id'];
    
    $sql = "SELECT * FROM proveedor WHERE id = '$id'";
    $resultado = $conn->query($sql);
    $row = $resultado->fetch_assoc();
    
    if($row) {
        echo json_encode(array(
            'nombreProveedor' => $row['proveedor']
        ));
    } else {
        echo json_encode(array(
            'nombreProveedor' => 'No encontrado'
        ));
    }
?>
