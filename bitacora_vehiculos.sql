-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-01-2026 a las 06:33:16
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bitacora_vehiculos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacora`
--

CREATE TABLE `bitacora` (
  `id` int(11) NOT NULL,
  `economico` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `tipo_mantenimiento` int(11) NOT NULL,
  `orden_servicio` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `km` int(11) NOT NULL,
  `proveedor` int(11) NOT NULL,
  `costo` int(11) NOT NULL,
  `fecha_mantenimiento` date NOT NULL,
  `fecha_edicion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `bitacora`
--

INSERT INTO `bitacora` (`id`, `economico`, `tipo_mantenimiento`, `orden_servicio`, `km`, `proveedor`, `costo`, `fecha_mantenimiento`, `fecha_edicion`) VALUES
(1, '1', 1, 'Prueba 1', 123432, 1, 12345, '2026-01-26', '2026-01-26 23:41:55'),
(2, '2', 1, 'Prueba 1', 123432, 1, 12345, '2026-01-26', '2026-01-26 23:41:55'),
(3, '3', 1, 'Prueba 1', 123432, 1, 12345, '2026-01-26', '2026-01-26 23:41:55'),
(4, '4', 1, 'Prueba 1', 123432, 1, 12345, '2026-01-26', '2026-01-26 23:41:55'),
(5, '5', 1, 'Prueba 5', 123432, 1, 12345, '2026-01-26', '2026-01-26 23:41:55'),
(6, '5', 2, 'Prueba 5', 123432, 2, 12345, '2026-01-26', '2026-01-26 23:41:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `economico`
--

CREATE TABLE `economico` (
  `id` int(11) NOT NULL,
  `vehiculo` varchar(72) COLLATE utf8_unicode_ci NOT NULL,
  `no_economico` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `economico`
--

INSERT INTO `economico` (`id`, `vehiculo`, `no_economico`, `descripcion`) VALUES
(1, 'Vehículo 1', '1', 'Vehículo 1'),
(2, 'Vehículo 2', '2', 'Vehículo 2'),
(3, 'Vehículo 3', '3', 'Vehículo 3'),
(4, 'Vehículo 4', '4', 'Vehículo 4'),
(5, 'Vehículo 5', '5', 'Vehículo 5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mantenimiento`
--

CREATE TABLE `mantenimiento` (
  `id` int(11) NOT NULL,
  `tipo_mantenimiento` varchar(72) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `mantenimiento`
--

INSERT INTO `mantenimiento` (`id`, `tipo_mantenimiento`) VALUES
(1, 'Afinación'),
(2, 'Frenos'),
(3, 'Suspensión'),
(4, 'Reparación de motor'),
(5, 'Llantas'),
(6, 'Problema eléctrico'),
(7, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `id` int(11) NOT NULL,
  `proveedor` varchar(54) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`id`, `proveedor`) VALUES
(1, 'Proveedor 1'),
(2, 'Proveedor 2'),
(3, 'Proveedor 3'),
(4, 'Proveedor 4');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `economico`
--
ALTER TABLE `economico`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mantenimiento`
--
ALTER TABLE `mantenimiento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `economico`
--
ALTER TABLE `economico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `mantenimiento`
--
ALTER TABLE `mantenimiento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
