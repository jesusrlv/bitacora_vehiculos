<?php
    require('qc.php');
   
    $sql = "SELECT * FROM economico ORDER BY id ASC";
    $resultadoSql = $conn->query($sql);

    echo'
        <option value="">Seleccione...</option>
    ';
    while($row = $resultadoSql->fetch_assoc()) {
        echo'
        <option value="'.$row['vehiculo'].'">'.$row['vehiculo'].'</option>
        ';
    }

?>