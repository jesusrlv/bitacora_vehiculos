<?php
    /**
     * Script de inicialización para la tabla de evidencia de fotos
     * Ejecutar una sola vez en el navegador: /bitacora_vehiculos/inicializar_evidencia.php
     */
    
    require('dashboard/query/qc.php');
    
    // SQL para crear la tabla
    $sql = "CREATE TABLE IF NOT EXISTS `evidencia_fotos` (
      `id` int(11) NOT NULL AUTO_INCREMENT,
      `id_bitacora` int(11) NOT NULL,
      `ruta_foto` varchar(255) NOT NULL,
      `fecha_subida` timestamp DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (`id`),
      KEY `id_bitacora` (`id_bitacora`),
      CONSTRAINT `evidencia_fotos_ibfk_1` FOREIGN KEY (`id_bitacora`) REFERENCES `bitacora` (`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci";
    
    if($conn->query($sql)) {
        echo '<div style="padding: 20px; background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 5px; color: #155724;">';
        echo '<h3>✓ Inicialización Exitosa</h3>';
        echo '<p>La tabla <strong>evidencia_fotos</strong> ha sido creada correctamente.</p>';
        echo '<p>Carpeta de almacenamiento: <code>evidencia_fotos/</code></p>';
        echo '<p><a href="dashboard/index.html" style="color: #155724; font-weight: bold;">← Volver al Dashboard</a></p>';
        echo '</div>';
    } else {
        echo '<div style="padding: 20px; background-color: #f8d7da; border: 1px solid #f5c6cb; border-radius: 5px; color: #721c24;">';
        echo '<h3>✗ Error en la Inicialización</h3>';
        echo '<p>Error al crear la tabla: ' . $conn->error . '</p>';
        echo '</div>';
    }
?>
