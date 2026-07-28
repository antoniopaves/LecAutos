-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-07-2026 a las 20:40:54
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db-lecautos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auto`
--

CREATE TABLE `auto` (
  `ID_AUTO` int(11) NOT NULL,
  `NOMBRE_AUTO` varchar(50) NOT NULL,
  `ESTADO_AUTO` char(20) NOT NULL,
  `MARCA_AUTO` varchar(30) NOT NULL,
  `PRECIO_AUTO` int(11) NOT NULL,
  `CANTIDAD_AUTO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `auto`
--

INSERT INTO `auto` (`ID_AUTO`, `NOMBRE_AUTO`, `ESTADO_AUTO`, `MARCA_AUTO`, `PRECIO_AUTO`, `CANTIDAD_AUTO`) VALUES
(1, 'GR Yaris', 'Nuevo', 'Toyota', 6500000, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `ID_USUARIO` int(11) NOT NULL,
  `NOMBRE_USUARIO` char(20) NOT NULL,
  `APELLIDO_USUARIO` char(150) NOT NULL,
  `CORREO_USUARIO` varchar(320) NOT NULL,
  `CONTRASENA_USUARIO` varchar(20) NOT NULL,
  `ROL_USUARIO` char(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID_USUARIO`, `NOMBRE_USUARIO`, `APELLIDO_USUARIO`, `CORREO_USUARIO`, `CONTRASENA_USUARIO`, `ROL_USUARIO`) VALUES
(1, 'Antonio', 'Pavés', 'antoniopaves877@gmail.com', '1234', 'ADMIN');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `ID_VENTA` int(11) NOT NULL,
  `ID_USUARIO` int(11) NOT NULL,
  `ID_AUTO` int(11) NOT NULL,
  `PRECIOTOTAL_VENTA` int(11) NOT NULL,
  `IVA_VENTA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auto`
--
ALTER TABLE `auto`
  ADD PRIMARY KEY (`ID_AUTO`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID_USUARIO`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`ID_VENTA`,`ID_USUARIO`,`ID_AUTO`),
  ADD KEY `FK_COMPRAR2` (`ID_AUTO`),
  ADD KEY `FK_COMPRARUSUARIO` (`ID_USUARIO`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auto`
--
ALTER TABLE `auto`
  MODIFY `ID_AUTO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID_USUARIO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `ID_VENTA` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `FK_COMPRAR2` FOREIGN KEY (`ID_AUTO`) REFERENCES `auto` (`ID_AUTO`),
  ADD CONSTRAINT `FK_COMPRARUSUARIO` FOREIGN KEY (`ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
