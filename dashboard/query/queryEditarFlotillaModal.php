<?php
    require('qc.php');

    $id = $_POST['id'];
   
        $sql = "SELECT * FROM flotilla WHERE id = '$id'";
        $resultadoSql = $conn->query($sql);
        $row = $resultadoSql->fetch_assoc();
    
        echo json_encode(array(
            "success" => "1",
            "id" => $row['id'],
            "flotilla" => $row['flotilla']
        )
        );
?>