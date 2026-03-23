<?php
    require('qc.php');

    $nombreProveedor = $_POST['nombreProveedor'];

    $sql = "INSERT INTO proveedor (
    proveedor
    ) VALUES (
    '$nombreProveedor'
    )";
    $resultadoSql = $conn->query($sql);

    if($resultadoSql){
        echo json_encode(
            array(
                'success' => 1
            ));
    }
    else{
        $error = $conn->error;
        echo json_encode(
            array(
                'success' => 0,
                'error' => $error
            ));
    }
?>