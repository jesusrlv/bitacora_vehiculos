<?php
    require('qc.php');

    $id = $_POST['id'];
   
    $sql = "SELECT * FROM economico WHERE id = '$id'";
    $resultadoSql = $conn->query($sql);
    $row = $resultadoSql->fetch_assoc();
    echo json_encode($row);

?>