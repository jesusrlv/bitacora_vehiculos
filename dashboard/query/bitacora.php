<?php
    require('qc.php');

    $fecha_mes = $_POST['fecha_mes'];
    $fecha_annio = $_POST['fecha_annio'];
   
    $sql = "SELECT * FROM bitacora WHERE MONTH(fecha_mantenimiento) = '$fecha_mes' AND YEAR(fecha_mantenimiento) = '$fecha_annio' ORDER BY id DESC";
    $resultadoSql = $conn->query($sql);
    $x=0;
    while($row = $resultadoSql->fetch_assoc()) {
        $x++;
        echo'
        <tr>
            <td>'.$x.'</td>
            <td>'.$row['economico'].'</td>
            <td>'.$row['tipo_mantenimiento'].'</td>
            <td>'.$row['orden_servicio'].'</td>
            <td>'.$row['km'].'</td>
            <td>'.$row['proveedor'].'</td>
            <td>'.$row['costo'].'</td>
            <td>'.$row['fecha_mantenimiento'].'</td>
        </tr>
        ';
    }

?>