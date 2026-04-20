<?php
    require('qc.php');

    $fecha = $_POST['fecha'];

    $sql = "SELECT * FROM bitacora WHERE fecha_mantenimiento = '$fecha' ORDER BY costo DESC";
    $resultadoSql = $conn->query($sql);
    $x = 0;
    $totalCosto = 0;
    while($row = $resultadoSql->fetch_assoc()) {
        $x++;
        $vehiculoId = $row['economico'];
        $mantenimientoId = $row['tipo_mantenimiento'];
        $proveedor = $row['proveedor'];
        $costo = $row['costo'];
        $totalCosto += $costo;

        $rowVehiculo = $conn->query("SELECT * FROM economico WHERE no_economico = '$vehiculoId'")->fetch_assoc();
        
        $rowMantenimiento = $conn->query("SELECT * FROM mantenimiento WHERE id = '$mantenimientoId'")->fetch_assoc();
        
        $rowProveedor = $conn->query("SELECT * FROM proveedor WHERE id = '$proveedor'")->fetch_assoc();

        echo'
        <tr>
            <td>'.$x.'</td>
            <td>'.$row['fecha_mantenimiento'].'</td>
            <td>'.$rowVehiculo['vehiculo'].'</td>
            <td>'.$row['km'].'</td>
            <td>'.$rowMantenimiento['tipo_mantenimiento'].'</td>
            <td>'.$rowProveedor['proveedor'].'</td>
            <td>'.$row['orden_servicio'].'</td>
            <td>$'.$costo.'</td>
        </tr>
        ';
    }
    
    if($x > 0) {
        echo'
        <tr class="table-info" style="font-weight: bold;">
            <td colspan="7" class="text-end">Total Costos: </td>
            <td>$'.$totalCosto.'</td>
        </tr>
        ';
    }

?>
