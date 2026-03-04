<?php
    require('qc.php');

    $fecha_mes = $_POST['fecha_mes'];
    $fecha_annio = $_POST['fecha_annio'];
   
    $sql = "SELECT * FROM bitacora WHERE MONTH(fecha_mantenimiento) = '$fecha_mes' AND YEAR(fecha_mantenimiento) = '$fecha_annio' ORDER BY id ASC";
    $resultadoSql = $conn->query($sql);
    $x=0;
    while($row = $resultadoSql->fetch_assoc()) {
        $x++;
        echo'
        <tr>
            <td>'.$x.'</td>';
        $economico = $row['economico'];
        
        $sqlEconomico = $conn->query("SELECT * FROM economico WHERE id = '$economico'")->fetch_assoc();

        $economico2 = $sqlEconomico['vehiculo'];
        $noEconomico = $sqlEconomico['no_economico'];

        echo'
            <td>'.$economico2.' '.$noEconomico.'</td>
            <td>'.$row['tipo_mantenimiento'].'</td>
            <td>'.$row['orden_servicio'].'</td>
            <td>'.$row['km'].'</td>
            <td>'.$row['proveedor'].'</td>
            <td>'.$row['costo'].'</td>
            <td>'.$row['fecha_mantenimiento'].'</td>
            <td>
            <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalVer'.$row['id'].'"><i class="bi bi-eye-fill"></i></button>            
            <button class="btn btn-secondary btn-sm" onclick="editarRegistro('.$row['id'].')"><i class="bi bi-pencil-square"></i></button>  
            <button class="btn btn-danger btn-sm" onclick="eliminarRegistro('.$row['id'].')"><i class="bi bi-trash"></i></button></td>
        </tr>
        ';
    }

?>