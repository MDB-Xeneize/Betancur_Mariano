create database ejercicio_2; 

use ejercicio_2; 


-- CREACION DE TABLAS
CREATE TABLE PAIS
(
  pais_id INT NOT NULL auto_increment,
  nombre_pais varchar(20) NOT NULL,
  PRIMARY KEY (pais_id),
  UNIQUE (nombre_pais)
);
CREATE TABLE PROVINCIA
(
  provincia_id INT NOT NULL auto_increment,
  nombre_provincia varchar(20) NOT NULL,
  pais_id INT NOT NULL,
  PRIMARY KEY (provincia_id),
  FOREIGN KEY (pais_id) REFERENCES PAIS(pais_id)
);
CREATE TABLE LOCALIDAD
(
  localidad_id INT NOT NULL auto_increment,
  nombre varchar(20) NOT NULL,
  codigo_postal INT NOT NULL,
  provincia_id INT NOT NULL,
  PRIMARY KEY (localidad_id),
  FOREIGN KEY (provincia_id) REFERENCES PROVINCIA(provincia_id),
  UNIQUE (codigo_postal)
);

CREATE TABLE EMPLEADO
(
  empleado_id INT NOT NULL auto_increment,
  dni INT NOT NULL,
  telefono INT NOT NULL,
  nombre varchar(20) not null,
  email varchar(50) NOT NULL,
  fecha_alta date NOT NULL,
  localidad_id INT NOT NULL,
  PRIMARY KEY (empleado_id),
  FOREIGN KEY (localidad_id) REFERENCES LOCALIDAD(localidad_id)
);


-- CARGA DE TABLAS
INSERT INTO PAIS (nombre_pais) VALUES ('Argentina'),('Bolivia'),('Nigeria');

-- Suponiendo que los registros pertenecen a Argentina (pais_id = 1)
INSERT INTO PROVINCIA (nombre_provincia, pais_id) VALUES ('Misiones', 1),('Jujuy', 1),('Chaco', 1);

-- Suponiendo que los registros pertenecen a Misiones (provincia_id = 1)
INSERT INTO LOCALIDAD (nombre, codigo_postal, provincia_id) VALUES ('Posadas', 3300, 1),('Obera', 3301, 1),('Iguazu', 3002, 1);

-- Suponiendo que los registros pertenecen a Posadas (localidad_id = 1)
INSERT INTO EMPLEADO (dni, telefono, nombre, email, fecha_alta, localidad_id) VALUES (12345678, 111111111,"Juan", 'Juan@gmail.com', '2000-08-21', 1),
(98765432, 222222222,"Mario", 'Mario@gmail.com', '2003-07-22', 2),(45678912, 333333333,"Jose", 'Jose@gmail.com', '2001-12-21', 3);


-- VER TABLAS
select * from pais;
select * from provincia;
select * from localidad;
select * from empleado;

