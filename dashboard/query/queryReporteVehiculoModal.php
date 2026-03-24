<?php
    require('qc.php');

    $id = $_POST['id'];
   
    $sql = "SELECT * FROM bitacora WHERE economico = '$id'";
    $resultadoSql = $conn->query($sql);
    $x = 0;
    while($row = $resultadoSql->fetch_assoc()) {
        $x++;
        echo'
        <tr>
            <td>'.$x.'</td>
            <td>'.$row['fecha_mantenimiento'].'</td>
            <td>'.$row['km'].'</td>
            <td>'.$row['tipo_mantenimiento'].'</td>
            <td>'.$row['orden_servicio'].'</td>
            <td>'.$row['proveedor'].'</td>
            <td>'.$row['costo'].'</td>
        </tr>
        ';
    }

?>