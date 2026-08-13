# Drone Management System

Sistema web para la gestión de drones, pilotos, misiones y mantenimiento, desarrollado para **AeroWatch**, una empresa ficticia dedicada a la inspección de infraestructura mediante drones.

##  Sobre AeroWatch

AeroWatch es una empresa ficticia especializada en inspección de infraestructura mediante drones. Actualmente opera una flota de 25 drones y cuenta con 12 pilotos certificados, realizando misiones de:

- Inspección de puentes
- Inspección de líneas eléctricas
- Vigilancia de perímetros
- Levantamiento de imágenes aéreas

Este sistema resuelve la necesidad de AeroWatch de centralizar la gestión de su flota, su personal y sus operaciones diarias.

##  Funcionalidades

- **Drones:** registro, consulta, edición, eliminación, estado, batería, ubicación y horas de vuelo.
- **Pilotos:** registro, consulta y asignación a drones.
- **Misiones:** creación y seguimiento con estados (`PROGRAMADA`, `EN_CURSO`, `COMPLETADA`, `CANCELADA`).
- **Mantenimiento:** registro de tipo, fecha, descripción, costo y estado por drone.

##  Tecnologías

- HTML / CSS / JavaScript
- Node.js + Express
- PostgreSQL (Neon)
- Postman

##  Arquitectura