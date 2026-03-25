<?php
    require('qc.php');

    $id = $_POST['id'];
   
    $sql = "SELECT * FROM economico WHERE id = '$id'";
    $resultadoSql = $conn->query($sql);
    $row = $resultadoSql->fetch_assoc();
    echo json_encode(array(
        'success' => 1,
        'vehiculo' => $row['vehiculo'],
        'no_economico' => $row['no_economico'],
        'descripcion' => $row['descripcion'],
        'flotilla' => $row['flotilla']
    ));

?>