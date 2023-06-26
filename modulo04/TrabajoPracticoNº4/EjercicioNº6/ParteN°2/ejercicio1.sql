create database ejercicio_1; 


use ejercicio_1; 

-- CREACION DE TABLAS
create table alumno(
  nombre varchar(20) not null,
  dni varchar(10) not null,
  fecha_nac date,
  email varchar(30),
  cod_matricula int not null auto_increment,
  primary key (cod_matricula)
);

create table curso(
  cod_curso int not null  auto_increment,
  nombre varchar(15) not null,
  primary key (cod_curso)
);

create table profesor(
  profesor_id int not null auto_increment,
  nombre varchar(20) not null,
  especialidad varchar(10) not null,
  email varchar(30),
  primary key (profesor_id)
);

create table inscripcion(
  cod_matricula int not null,
  cod_curso int not null,
   primary key (cod_matricula, cod_curso),
  foreign key (cod_matricula) references Alumno(cod_matricula),
  foreign key (cod_curso) references Curso(cod_curso)
);

create table imparticion(
  cod_curso int not null,
  profesor_id int not null,
  primary key (cod_curso, profesor_id),
  foreign key (cod_curso) references Curso(cod_curso),
  foreign key (profesor_id) references Profesor(profesor_id)
);

-- CARGA DE TABLAS
insert into alumno (nombre, dni, fecha_nac, email)
values
	("Mariano", 123, "1997-12-15", "mariano@gmail.com"),
    	("Daniel",456, "1998-01-16", "daniel@gmail.com"),
	("Juan", 789, "1999-02-17", "juan@gmail.com")
;

insert into curso (nombre)
values
	("Matematica"),
    ("Lengua"),
	("Filosofia")
;

insert into profesor (nombre, especialidad, email)
values
	("Ramiro", "Numeros",  "ramiro@gmail.com"),
    ("Eladio","Letras",  "eladio@gmail.com"),
	("Facu", "Libro", "facu@gmail.com")
;

-- VER TABLAS
select * from alumno;
select * from curso;
select * from profesor;