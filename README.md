# Proyecto Integrador - Automatización de Ventas Mapuescuela

Este repositorio contiene el avance de la **Entrega 1** para la asignatura **Integración de Plataformas**. Consiste en el diseño y propuesta de automatización del proceso de ventas de artículos usados para la agrupación sin fines de lucro Mapuescuela, utilizando **BPMN** y el motor de procesos **Flowable**.

## Estructura del Repositorio
* `/mapuescuela_mvp/modelos`: Contiene los diagramas BPMN en formato de imagen y los archivos fuentes `.bpmn` (AS-IS y TO-BE).
* `/mapuescuela_mvp/gestion`: Documentación de actas de reuniones semanales y roles del equipo.
* `/mapuescuela_mvp/src`: Código fuente base del Web Service (Mock de la API REST para la generación de pedidos).

## Avance del Diseño de Procesos
1.  **Modelo AS-IS:** Refleja la situación actual basada en la gestión manual de ventas por mensaje directo de Instagram, evidenciando problemas de control de stock y validación bancaria.
2.  **Modelo TO-BE:** Propuesta automatizada que integra un temporizador (*Boundary Timer Event*) de 24 horas para la cancelación automática de pedidos impagos y la liberación de stock.
