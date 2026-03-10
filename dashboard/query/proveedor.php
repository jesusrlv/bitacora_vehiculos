<?php
    require('qc.php');
   
    $sql = "SELECT * FROM proveedor ORDER BY id ASC";
    $resultadoSql = $conn->query($sql);
    $x = 0;
    while($row = $resultadoSql->fetch_assoc()) {
        $x++;
        echo'
        <tr>
            <td>'.$x.'</td>
            <td>'.$row['proveedor'].'</td>
        </tr>
        ';
    }

?>