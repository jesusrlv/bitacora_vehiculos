-- Tabla para almacenar registros de evidencia de fotos
CREATE TABLE IF NOT EXISTS `evidencia_fotos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_bitacora` int(11) NOT NULL,
  `ruta_foto` varchar(255) NOT NULL,
  `fecha_subida` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_bitacora` (`id_bitacora`),
  CONSTRAINT `evidencia_fotos_ibfk_1` FOREIGN KEY (`id_bitacora`) REFERENCES `bitacora` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
