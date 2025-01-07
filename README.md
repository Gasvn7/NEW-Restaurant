# Documento de Requisitos: Web de Restaurante Ficticio

## 1. Objetivo
Crear una página web para un restaurante ficticio que permita a los usuarios:
- Reservar una mesa en el local.
- Realizar pedidos de delivery.
- Explorar el menú del restaurante.

El proyecto estará diseñado para mostrar habilidades de desarrollo web full stack y será publicado en GitHub, LinkedIn y, opcionalmente, hosteado online.

---

## 2. Funcionalidades Esenciales
### Reservas
- Formulario para seleccionar:
  - Fecha y hora.
  - Número de personas.
- Confirmación de la reserva con mensaje claro.
- Validación de horarios disponibles.

### Pedidos de Delivery
- Visualización del menú dividido en categorías (entradas, principales, postres, bebidas).
- Posibilidad de agregar productos al carrito.
- Carrito de compras con opción de modificar cantidad o eliminar productos.
- Formulario de datos de entrega:
  - Nombre.
  - Teléfono.
  - Dirección.
- Confirmación del pedido.

### Exploración del Menú
- Lista de platillos con:
  - Imagen.
  - Nombre.
  - Descripción breve.
  - Precio.
- Filtros por categoría.

---

## 3. Usuarios
### Cliente
- Puede:
  - Explorar el menú.
  - Realizar reservas.
  - Pedir delivery.
  
### Administrador (futuro)
- Gestiona:
  - Reservas.
  - Pedidos.
  - Productos del menú.

---

## 4. Páginas Principales
1. **Inicio**
   - Resumen de servicios: Reservas, Delivery y Menú.
   - Imágenes atractivas del restaurante y platillos destacados.

2. **Menú**
   - Listado de platillos con filtros por categoría.

3. **Reservas**
   - Formulario para realizar reservas.

4. **Pedidos/Carrito**
   - Vista del carrito.
   - Formulario para completar el pedido.

5. **Confirmaciones**
   - Mensaje de confirmación de reserva o pedido exitoso.

---

## 5. Tecnologías Propuestas
- **Frontend**: React (o Vue.js) + CSS (o TailwindCSS/Bootstrap).
- **Backend**: Node.js (Express) o Django.
- **Base de datos**: MongoDB o PostgreSQL.
- **Hosting**: Vercel, Netlify o AWS (opcional).

---

## 6. Funcionalidades Opcionales (Futuras)
1. **Seguimiento de Pedidos**
   - Simular el estado del pedido (preparando, en camino, entregado).

2. **Dashboard Administrativo**
   - Panel para gestionar reservas y pedidos.

3. **Diseño Mejorado**
   - Animaciones.
   - Modo oscuro.

4. **Notificaciones**
   - Enviar correos electrónicos de confirmación para reservas y pedidos.

---

## 7. Cronograma de Trabajo
### Semana 1: Planificación y Diseño
- Completar el documento de requisitos.
- Crear wireframes en Figma para cada página.

### Semana 2-3: Desarrollo del Backend
- Configurar servidor y base de datos.
- Crear rutas y modelos para reservas, pedidos y menú.

### Semana 4-5: Desarrollo del Frontend
- Diseñar estructura básica.
- Integrar con el backend.

### Semana 6: Pruebas y Lanzamiento
- Probar funcionalidades esenciales.
- Subir a GitHub y, opcionalmente, hostear el proyecto.

---

## 8. Referencias
- Páginas inspiradoras: OpenTable, UberEats, Zomato.
