<?php
    require('qc.php');

    $nombreMantenimiento = $_POST['nombreMantenimiento'];

    $sql = "INSERT INTO mantenimiento (
    tipo_mantenimiento
    ) VALUES (
    '$nombreMantenimiento'
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