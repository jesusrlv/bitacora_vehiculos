-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 06-04-2026 a las 23:01:36
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.28

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
  `flotilla` int(11) NOT NULL,
  `tipo_mantenimiento` int(11) NOT NULL,
  `orden_servicio` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `km` int(11) NOT NULL,
  `proveedor` int(11) NOT NULL,
  `costo` int(11) NOT NULL,
  `fecha_mantenimiento` date NOT NULL,
  `fecha_edicion` datetime NOT NULL,
  `estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `bitacora`
--

INSERT INTO `bitacora` (`id`, `economico`, `flotilla`, `tipo_mantenimiento`, `orden_servicio`, `km`, `proveedor`, `costo`, `fecha_mantenimiento`, `fecha_edicion`, `estatus`) VALUES
(1, '4', 0, 4, 'Prueba 1', 123432, 1, 12345, '2026-01-26', '2026-01-26 23:41:55', 0),
(2, '2', 0, 1, 'Prueba 1', 123432, 1, 12345, '2026-01-26', '2026-01-26 23:41:55', 0),
(3, '3', 0, 6, 'Prueba 1', 123432, 2, 12345, '2026-01-26', '2026-01-26 23:41:55', 0),
(4, '4', 0, 5, 'Prueba 1', 123432, 3, 12345, '2026-01-26', '2026-01-26 23:41:55', 0),
(7, '2', 0, 2, '2', 2, 2, 2, '2026-03-02', '2026-03-03 21:57:51', 1),
(8, '3', 1, 2, '423432', 234324, 2, 234324, '2026-04-06', '2026-04-06 22:58:43', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `economico`
--

CREATE TABLE `economico` (
  `id` int(11) NOT NULL,
  `vehiculo` varchar(72) COLLATE utf8_unicode_ci NOT NULL,
  `no_economico` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `flotilla` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `economico`
--

INSERT INTO `economico` (`id`, `vehiculo`, `no_economico`, `descripcion`, `flotilla`) VALUES
(1, 'Vehículo 1', '122', 'Vehículo 1 ddd', 4),
(2, 'Vehículo 2', '2', 'Vehículo 2', 1),
(3, 'Vehículo 3', '3', 'Vehículo 3', 1),
(4, 'Vehículo 4', '4', 'Vehículo 4', 3),
(5, 'Vehículo 5', '5', 'Vehículo 5', 4),
(6, 'q', 'q', 'q', 2),
(7, '1', '1', '1', 2),
(8, '1q', '1q', '1q', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `flotilla`
--

CREATE TABLE `flotilla` (
  `id` int(11) NOT NULL,
  `flotilla` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `flotilla`
--

INSERT INTO `flotilla` (`id`, `flotilla`) VALUES
(1, 'Flotilla 18'),
(2, 'Flotilla 27'),
(3, 'Flotilla 36'),
(4, 'Flotilla 45'),
(5, 'Flotilla 54'),
(6, 'Flotilla 63'),
(14, 'Flotilla 72');

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
-- Indices de la tabla `flotilla`
--
ALTER TABLE `flotilla`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `economico`
--
ALTER TABLE `economico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `flotilla`
--
ALTER TABLE `flotilla`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

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
