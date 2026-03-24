<?php
    require('qc.php');
   
    $sql = "SELECT * FROM economico ORDER BY id ASC";
    $resultadoSql = $conn->query($sql);
    $x = 0;
    while($row = $resultadoSql->fetch_assoc()) {
        $x++;
        $flotilla = $row['flotilla'];
        $sqlFlotilla= $conn->query("SELECT * FROM flotilla WHERE id = '$flotilla'")->fetch_assoc();
        echo'
        <tr>
            <td>'.$x.'</td>
            <td>'.$row['vehiculo'].'</td>
            <td>'.$row['no_economico'].'</td>
            <td>'.$row['descripcion'].'</td>
            <td><i class="bi bi-cart-check"></i> '.$sqlFlotilla['flotilla'].'</td>
            <td>
            <button class="btn btn-success btn-sm" onclick="reporteVehiculo('.$row['id'].')"><i class="bi bi-file-earmark-post"></i></button>
            <button class="btn btn-primary btn-sm" onclick="modalEditarVehiculo('.$row['id'].')"><i class="bi bi-pencil-square"></i></button>
            <button class="btn btn-danger btn-sm" onclick="eliminarVehiculo('.$row['id'].')"><i class="bi bi-trash"></i></button>
            </td>
        </tr>
        ';
    }

?>