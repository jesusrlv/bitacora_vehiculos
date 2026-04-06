<?php
    require('qc.php');
   
    $sql = "SELECT * FROM economico ORDER BY id ASC";
    $resultadoSql = $conn->query($sql);

    echo'
        <option value="" selected>Seleccione vehículo...</option>
    ';
    while($row = $resultadoSql->fetch_assoc()) {
        echo'
        <option value="'.$row['id'].'" data-vehiculo="'.$row['flotilla'].'">'.$row['vehiculo'].'</option>
        ';
    }

?>