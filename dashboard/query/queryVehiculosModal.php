<?php
    require('qc.php');
   
    $sql = "SELECT * FROM economico ORDER BY id ASC";
    $resultadoSql = $conn->query($sql);
    $x = 0;
    while($row = $resultadoSql->fetch_assoc()) {
        $x++;
        echo'
        <tr>
            <td>'.$x.'</td>
            <td>'.$row['vehiculo'].'</td>
            <td>'.$row['no_economico'].'</td>
            <td>'.$row['descripcion'].'</td>
        </tr>
        ';
    }

?>