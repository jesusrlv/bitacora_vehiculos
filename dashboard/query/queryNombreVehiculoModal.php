<?php
    require('qc.php');

    $id = $_POST['id'];

    $sql = "SELECT * FROM bitacora WHERE economico = '$id'";
    $resultadoSql = $conn->query($sql);
    $x = 0;
    $row = $resultadoSql->fetch_assoc();
       
    $sqlVehiculo = "SELECT * FROM economico WHERE id = '$id'";
    $resultadoSqlVehiculo = $conn->query($sqlVehiculo);
    $rowVehiculo = $resultadoSqlVehiculo->fetch_assoc();
    echo json_encode(array(
        "success" => "1",
        "nombreVehiculo" => $rowVehiculo['vehiculo'].' '.$rowVehiculo['no_economico'].' ('.$rowVehiculo['flotilla'].')'
    )
    );

?>