-- Crear nueva base de datos desde cero
DROP DATABASE IF EXISTS hospitaldb;
CREATE DATABASE hospitaldb;
USE hospitaldb;

-- Tabla de usuarios
CREATE TABLE usuario (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    rol VARCHAR(20) NOT NULL
) ENGINE=InnoDB;

-- Tabla de horarios
CREATE TABLE horario (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL
) ENGINE=InnoDB;

-- Días disponibles por horario (simula lista DayOfWeek)
CREATE TABLE horario_dias_disponibles (
    horario_id BIGINT,
    dias_disponibles VARCHAR(20),
    FOREIGN KEY (horario_id) REFERENCES horario(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Tabla de boxes
CREATE TABLE box (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    piso INT NOT NULL,
    disponible BOOLEAN NOT NULL,
    horario_id BIGINT,
    FOREIGN KEY (horario_id) REFERENCES horario(id)
) ENGINE=InnoDB;

-- Tabla de especialistas
CREATE TABLE especialista (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    especialidad VARCHAR(255) NOT NULL,
    horario_id BIGINT,
    FOREIGN KEY (horario_id) REFERENCES horario(id)
) ENGINE=InnoDB;

-- Tabla de reservas
CREATE TABLE reserva (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    fecha_hora_inicio DATETIME NOT NULL,
    fecha_hora_fin DATETIME NOT NULL,
    box_id BIGINT,
    usuario_id BIGINT,
    FOREIGN KEY (box_id) REFERENCES box(id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
) ENGINE=InnoDB;

-- Insertar datos iniciales

-- Usuarios
INSERT INTO usuario (nombre, correo, rol) VALUES
('Ana Pérez', 'ana@clinica.cl', 'RECEPCIONISTA'),
('Carlos Soto', 'carlos@clinica.cl', 'ADMINISTRADOR');

-- Horarios
INSERT INTO horario (hora_inicio, hora_fin) VALUES
('08:00:00', '13:00:00'), -- ID 1
('14:00:00', '19:00:00'); -- ID 2

-- Días disponibles
INSERT INTO horario_dias_disponibles (horario_id, dias_disponibles) VALUES
(1, 'MONDAY'),
(1, 'TUESDAY'),
(1, 'WEDNESDAY'),
(2, 'THURSDAY'),
(2, 'FRIDAY');

-- Boxes
INSERT INTO box (nombre, piso, disponible, horario_id) VALUES
('Box 101', 1, true, 1),
('Box 202', 2, true, 2);

-- Especialistas
INSERT INTO especialista (nombre, especialidad, horario_id) VALUES
('Dr. García', 'Cardiología', 1),
('Dra. López', 'Dermatología', 2);

-- Reservas
INSERT INTO reserva (fecha_hora_inicio, fecha_hora_fin, box_id, usuario_id) VALUES
('2025-06-22 10:00:00', '2025-06-22 10:30:00', 1, 1);
