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
                <td>
                    <button type="button" class="btn btn-success btn-sm" onclick="modalEditarProveedor('.$row['id'].')"><i class="bi bi-file-earmark-post"></i></button>
                    <button type="button" class="btn btn-primary btn-sm" onclick="editarProveedor('.$row['id'].')"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="btn btn-danger btn-sm" onclick="eliminarProveedor('.$row['id'].')"><i class="bi bi-trash3-fill"></i></button>
                </td>
        </tr>
        ';
    }

?>