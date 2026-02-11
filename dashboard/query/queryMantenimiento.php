<?php
    require('qc.php');
   
    $sql = "SELECT * FROM mantenimiento ORDER BY id ASC";
    $resultadoSql = $conn->query($sql);

    echo'
        <option value="" selected>Tipo de mantenimiento...</option>
    ';
    while($row = $resultadoSql->fetch_assoc()) {
        echo'
        <option value="'.$row['id'].'">'.$row['tipo_mantenimiento'].'</option>
        ';
    }

?>