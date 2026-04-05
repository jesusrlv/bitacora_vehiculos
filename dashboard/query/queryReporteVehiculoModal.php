<?php
    require('qc.php');

    $id = $_POST['id'];
    $fecha = $_POST['fecha'];

    $sql = "SELECT * FROM bitacora WHERE economico = '$id' AND fecha_mantenimiento = '$fecha' ORDER BY id ASC";
    $resultadoSql = $conn->query($sql);
    $x = 0;
    while($row = $resultadoSql->fetch_assoc()) {
        $x++;
        $mantenimientoId = $row['tipo_mantenimiento'];
        $proveedor = $row['proveedor'];

        // $queryMantenimiento = $conn->query("SELECT * FROM mantenimiento WHERE id = '$mantenimiento' 
        // ");
        // $rowMantenimiento = $queryMantenimiento

        $rowMantenimiento = $conn->query("SELECT * FROM mantenimiento WHERE id = '$mantenimientoId'")->fetch_assoc();
        
        $rowProveedor = $conn->query("SELECT * FROM proveedor WHERE id = '$proveedor'")->fetch_assoc();

        echo'
        <tr>
            <td>'.$x.'</td>
            <td>'.$row['fecha_mantenimiento'].'</td>
            <td>'.$row['km'].'</td>
            <td>'.$rowMantenimiento['tipo_mantenimiento'].'</td>
            <td>'.$row['orden_servicio'].'</td>
            <td>'.$rowProveedor['proveedor'].'</td>
            <td>'.$row['costo'].'</td>
        </tr>
        ';
    }

?>