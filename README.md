# TaskBoard Académico

Pequeña aplicación web para registrar y administrar tareas académicas.

Cómo usar:

- Abrir `index.html` en el navegador.
- Completar `Título`, `Curso` y elegir `Prioridad`.
- Presionar `Agregar tarea`.
- Usar los botones de filtro para mostrar `Todas`, `Pendientes` o `Completadas`.
- Contadores se actualizan automáticamente.

Casos de prueba:

1. Agregar tres tareas — deben mostrarse inmediatamente.
2. Marcar una como completada — su apariencia cambia.
3. Filtrar por pendientes — solo se muestran pendientes.
4. Eliminar una tarea — desaparece y contadores actualizan.
5. Intentar agregar sin título — se muestra validación.

Evidencias y entrega
--------------------

Abrir `index.html` en el navegador mostrará la aplicación con tres tareas de ejemplo ya cargadas (para demostración). Para generar las evidencias siga estos pasos:

1. Abrir `index.html` en el navegador.
2. Registrar tres tareas nuevas usando el formulario — verifique que aparecen inmediatamente.
3. Marcar una tarea como completada — observe el cambio visual y el contador de completadas.
4. Seleccionar el filtro `Pendientes` — verificar que solo aparecen las tareas sin completar.
5. Eliminar una tarea — verificar que desaparece y los contadores se actualizan.
6. Intentar agregar una tarea sin título — verificar que aparece el mensaje: "El título es obligatorio.".

Archivos entregados
------------------

- `index.html` — Interfaz principal.
- `styles.css` — Estilos de la aplicación.
- `script.js` — Lógica JavaScript (arreglo en memoria, CRUD, filtros, contadores).
- `README.md` — Instrucciones y casos de prueba.

Comentarios finales
------------------

La aplicación mantiene los datos en memoria (arreglo `tasks` en `script.js`) y no persiste entre recargas. Si quieres que agregue persistencia local (`localStorage`), generación de un archivo de evidencia (capturas o GIF) o un archivo `demo.html` separado, indícalo y lo agrego.
