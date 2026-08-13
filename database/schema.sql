-- Drone Management System - AeroWatch
-- Script de creación de base de datos

-- DRONES
CREATE TABLE drones (
    id              SERIAL PRIMARY KEY,
    modelo          VARCHAR(100) NOT NULL,
    fabricante      VARCHAR(100) NOT NULL,
    serial          VARCHAR(50) UNIQUE NOT NULL,
    bateria         INTEGER CHECK (bateria BETWEEN 0 AND 100) DEFAULT 100,
    estado          VARCHAR(20) CHECK (estado IN ('DISPONIBLE','EN_MISION','MANTENIMIENTO')) DEFAULT 'DISPONIBLE',
    horas_vuelo     NUMERIC(10,2) DEFAULT 0,
    ubicacion       VARCHAR(100),
    created_at      TIMESTAMP DEFAULT NOW()
);

-- PILOTOS
CREATE TABLE pilotos (
    id              SERIAL PRIMARY KEY,
    nombre          VARCHAR(100) NOT NULL,
    licencia        VARCHAR(50) UNIQUE NOT NULL,
    estado          VARCHAR(20) CHECK (estado IN ('ACTIVO','INACTIVO')) DEFAULT 'ACTIVO',
    created_at      TIMESTAMP DEFAULT NOW()
);

-- MISIONES
CREATE TABLE misiones (
    id              SERIAL PRIMARY KEY,
    nombre          VARCHAR(150) NOT NULL,
    descripcion     TEXT,
    drone_id        INTEGER REFERENCES drones(id),
    piloto_id       INTEGER REFERENCES pilotos(id),
    ubicacion       VARCHAR(100),
    fecha_inicio    TIMESTAMP,
    fecha_fin       TIMESTAMP,
    estado          VARCHAR(20) CHECK (estado IN ('PROGRAMADA','EN_CURSO','COMPLETADA','CANCELADA')) DEFAULT 'PROGRAMADA',
    created_at      TIMESTAMP DEFAULT NOW()
);

-- MANTENIMIENTO
CREATE TABLE mantenimiento (
    id              SERIAL PRIMARY KEY,
    drone_id        INTEGER REFERENCES drones(id),
    tipo            VARCHAR(50) NOT NULL,
    descripcion     TEXT,
    fecha           DATE NOT NULL,
    costo           NUMERIC(10,2),
    estado          VARCHAR(20) CHECK (estado IN ('PENDIENTE','EN_PROCESO','COMPLETADO')) DEFAULT 'PENDIENTE',
    created_at      TIMESTAMP DEFAULT NOW()
);