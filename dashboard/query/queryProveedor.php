<?php
    require('qc.php');
   
    $sql = "SELECT * FROM proveedor ORDER BY id ASC";
    $resultadoSql = $conn->query($sql);

    echo'
        <option value="" selected>Proveedor...</option>
    ';
    while($row = $resultadoSql->fetch_assoc()) {
        echo'
        <option value="'.$row['id'].'">'.$row['proveedor'].'</option>
        ';
    }

?>