<?php
    require('qc.php');
   
    $sql = "SELECT * FROM mantenimiento ORDER BY id ASC";
    $resultadoSql = $conn->query($sql);
    $x = 0;
    while($row = $resultadoSql->fetch_assoc()) {
        $x++;
        echo'
        <tr>
            <td>'.$x.'</td>
            <td>'.$row['tipo_mantenimiento'].'</td>
        </tr>
        ';
    }

?>