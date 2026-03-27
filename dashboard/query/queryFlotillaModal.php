<?php
    require('qc.php');
   
    $sql = "SELECT * FROM flotilla ORDER BY id ASC";
    $resultadoSql = $conn->query($sql);
    $x = 0;
    while($row = $resultadoSql->fetch_assoc()) {
        $x++;
        echo'
        <tr>
            <td>'.$x.'</td>
            <td>'.$row['flotilla'].'</td>
            <td>
            <button class="btn btn-success btn-sm" onclick="reporteFlotilla('.$row['id'].')"><i class="bi bi-file-earmark-post"></i></button>
            <button class="btn btn-primary btn-sm" onclick="modalEditarFlotilla('.$row['id'].')"><i class="bi bi-pencil-square"></i></button>
            <button class="btn btn-danger btn-sm" onclick="eliminarFlotilla('.$row['id'].')"><i class="bi bi-trash"></i></button>
            </td>
        </tr>
        ';
    }

?>