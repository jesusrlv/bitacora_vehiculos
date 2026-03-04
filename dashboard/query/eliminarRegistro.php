<?php
    require('qc.php');
    
    $id = $_POST['id'];

    $sql = "DELETE FROM bitacora WHERE id = '$id'";
    $resultadoSql = $conn->query($sql);
    if($resultadoSql) {
        echo json_encode(array('success' => 1));
    } else {
        echo json_encode(array('success' => 0));
    }
?>