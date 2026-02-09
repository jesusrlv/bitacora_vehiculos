<?php
    require('qc.php');

    $mes = $_POST['fecha_mes'];
    $annio = $_POST['fecha_annio'];
   
    $sqlVehiculos = "SELECT COUNT(*) AS vehiculo FROM bitacora WHERE MONTH(fecha_mantenimiento) = $mes AND YEAR(fecha_mantenimiento) = $annio";
    $resultadoSql = $conn->query($sqlVehiculos);
    $rowVehiculos = $resultadoSql->fetch_assoc();
    $vehiculo = $rowVehiculos['vehiculo'];

    $sqlGastos = "SELECT SUM(costo) AS gasto FROM bitacora WHERE MONTH(fecha_mantenimiento) = $mes AND YEAR(fecha_mantenimiento) = $annio";
    $resultadoSql = $conn->query($sqlGastos);
    $rowGastos = $resultadoSql->fetch_assoc();
    $gasto = $rowGastos['gasto'];

    echo json_encode(
        array(
            'vehiculo' => $vehiculo, 
            'gasto' => $gasto
        ));

    

?>