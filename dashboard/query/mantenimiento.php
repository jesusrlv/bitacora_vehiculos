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
                <td>
                    <button type="button" class="btn btn-info btn-sm" onclick="reporteMantenimiento('.$row['id'].')"><i class="bi bi-graph-up"></i></button>
                    <button type="button" class="btn btn-success btn-sm" onclick="modalEditarMantenimiento('.$row['id'].')"><i class="bi bi-file-earmark-post"></i></button>
                    <button type="button" class="btn btn-primary btn-sm" onclick="editarMantenimiento('.$row['id'].')"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="btn btn-danger btn-sm" onclick="eliminarMantenimiento('.$row['id'].')"><i class="bi bi-trash3-fill"></i></button>
                </td>
        </tr>
        ';
    }

?>