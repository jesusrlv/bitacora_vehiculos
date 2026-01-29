<?php
    require('qc.php');

    $fecha_mes = $_POST['fecha_mes'];
    $fecha_annio = $_POST['fecha_annio'];

    $sqlContar = "SELECT b.economico AS economico, e.vehiculo as vehiculo, COUNT(b.economico) AS cantidad_economico FROM bitacora b LEFT JOIN economico e ON b.economico = e.no_economico WHERE MONTH(fecha_mantenimiento) = '$fecha_mes' AND YEAR(fecha_mantenimiento) = '$fecha_annio' GROUP BY b.economico";
   
    // SELECT b.economico AS economico, COUNT(b.economico) AS cantidad_economico FROM bitacora b GROUP BY economico;

    // SELECT b.economico AS economico, COUNT(b.economico) AS cantidad_economico FROM bitacora b LEFT JOIN economico e ON b.economico = e.id GROUP BY e.economico;

    // SELECT b.economico AS economico, e.vehiculo as vehiculo, COUNT(b.economico) AS cantidad_economico FROM bitacora b LEFT JOIN economico e ON b.economico = e.no_economico GROUP BY e.vehiculo; 

    // SELECT b.economico AS economico, e.vehiculo as vehiculo, COUNT(b.economico) AS cantidad_economico FROM bitacora b LEFT JOIN economico e ON b.economico = e.no_economico GROUP BY e.vehiculo; 

    //$sql = "SELECT * FROM economico ORDER BY id ASC";
    $resultadoSql = $conn->query($sqlContar);

    while ($row = $resultadoSql->fetch_assoc()) {
        $data[] = $row;
    }

    echo json_encode($data);

?>