<?php
    require('qc.php');

    $id = $_POST['id'];
    $fecha = $_POST['fecha'];

    $sql = "SELECT * FROM bitacora WHERE proveedor = '$id' AND fecha_mantenimiento = '$fecha' ORDER BY id ASC";
    $resultadoSql = $conn->query($sql);
    $x = 0;
    while($row = $resultadoSql->fetch_assoc()) {
        $x++;
        $vehiculoId = $row['economico'];
        $mantenimientoId = $row['tipo_mantenimiento'];

        $rowVehiculo = $conn->query("SELECT * FROM economico WHERE no_economico = '$vehiculoId'")->fetch_assoc();
        
        $rowMantenimiento = $conn->query("SELECT * FROM mantenimiento WHERE id = '$mantenimientoId'")->fetch_assoc();

        echo'
        <tr>
            <td>'.$x.'</td>
            <td>'.$row['fecha_mantenimiento'].'</td>
            <td>'.$row['km'].'</td>
            <td>'.$rowVehiculo['vehiculo'].'</td>
            <td>'.$rowMantenimiento['tipo_mantenimiento'].'</td>
            <td>'.$row['orden_servicio'].'</td>
            <td>$'.$row['costo'].'</td>
        </tr>
        ';
    }

?>
