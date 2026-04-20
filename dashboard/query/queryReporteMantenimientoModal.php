<?php
    require('qc.php');

    $id = $_POST['id'];
    $fecha = $_POST['fecha'];

    $sql = "SELECT * FROM bitacora WHERE tipo_mantenimiento = '$id' AND fecha_mantenimiento = '$fecha' ORDER BY id ASC";
    $resultadoSql = $conn->query($sql);
    $x = 0;
    while($row = $resultadoSql->fetch_assoc()) {
        $x++;
        $vehiculoId = $row['economico'];
        $proveedor = $row['proveedor'];

        $rowVehiculo = $conn->query("SELECT * FROM vehiculos WHERE no_economico = '$vehiculoId'")->fetch_assoc();
        
        $rowProveedor = $conn->query("SELECT * FROM proveedor WHERE id = '$proveedor'")->fetch_assoc();

        echo'
        <tr>
            <td>'.$x.'</td>
            <td>'.$row['fecha_mantenimiento'].'</td>
            <td>'.$row['km'].'</td>
            <td>'.$rowVehiculo['vehiculo'].'</td>
            <td>'.$row['orden_servicio'].'</td>
            <td>'.$rowProveedor['proveedor'].'</td>
            <td>$'.$row['costo'].'</td>
        </tr>
        ';
    }

?>
