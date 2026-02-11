<?php
    require('qc.php');

    $proveedor = $_POST['proveedor'];
    $mantenimiento = $_POST['mantenimiento'];
    $ordenServicio = $_POST['ordenServicio'];
    $kilometraje = $_POST['kilometraje'];
    $costo = $_POST['costo'];
    $fechaMantenimiento = $_POST['fechaMantenimiento'];
    $numEconomico = $_POST['numEconomico'];
    $fechaHoy = date('Y-m-d H:i:s');

    $sql = "INSERT INTO bitacora (
    proveedor, 
    tipo_mantenimiento, 
    economico, 
    orden_servicio, 
    km, 
    costo, 
    fecha_mantenimiento,
    fecha_edicion,
    estatus
    ) VALUES (
    '$proveedor', 
    '$mantenimiento', 
    '$numEconomico',
    '$ordenServicio', 
    '$kilometraje', 
    '$costo', 
    '$fechaMantenimiento',
    '$fechaHoy',
    1
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