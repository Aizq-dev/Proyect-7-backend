🛠 Descripción del proyecto (ES):

Servidor desplegado en Render con base de datos MongoDB Atlas. Este proyecto incluye varias funcionalidades avanzadas:

Rate Limiting: máximo de 50 peticiones cada 3 minutos.

CORS: habilitado para cualquier origen.

Autenticación con JWT: protege rutas sensibles.

Cloudinary: usado para alojar imágenes asociadas a los autos, accesibles tras autenticación.

🔐 Seguridad:
Los endpoints de tipo GET son públicos.

Para crear, editar o eliminar se requiere autenticación mediante token JWT.

🔧 Funcionalidades principales:
GET /api/autos: devuelve todos los coches.

GET /api/marca: devuelve todas las marcas.

CRUD completo para Auto y Marca:

Crear, editar y eliminar coches o marcas por ID (POST, PUT, DELETE).

Relación entre entidades:

Las marcas incluyen los coches que pertenecen a ellas.

Los coches muestran su marca correspondiente.

🔄 Endpoints de relación:
PUT /api/marca/:idMarca
Permite añadir múltiples coches a una marca mediante el body.

PUT /api/marca/:idMarca/:idAuto
Añade o elimina la relación de un coche con la marca (si no existe, se crea; si ya existe, se elimina).

PUT /api/autos/:idAuto/marca/:idMarca
Modifica la relación desde la perspectiva del coche.

👤 Autenticación de usuarios:
POST /auth/register: registro de usuario (contraseñas deben tener mínimo 6 caracteres, una mayúscula y una minúscula).

POST /auth/login: autenticación y entrega de token JWT.

[DEMO RENDER](https://proyect-7-backend.onrender.com/api/autos)


🛠 Project description (EN):

Server deployed on Render, with MongoDB Atlas as the database. This backend includes key security and performance features:

Rate Limiting: max 50 requests every 3 minutes.

CORS: enabled for all domains.

JWT Authentication: protects non-GET routes.

Cloudinary: used to host car images, shown only with valid token.

🔐 Security:
GET endpoints are public.

POST, PUT, and DELETE require JWT authentication.

🔧 Core Features:
GET /api/autos: returns all cars.

GET /api/marca: returns all brands.

Full CRUD for both Auto and Marca via ID.

Entity Relations:

Brands list their associated vehicles.

Each car shows its related brand.

🔄 Relation Endpoints:
PUT /api/marca/:idMarca
Adds multiple cars to a brand via the request body.

PUT /api/marca/:idMarca/:idAuto
If the relation does not exist, it's created; otherwise, it's removed.

PUT /api/autos/:idAuto/marca/:idMarca
Allows relation updates from the car’s perspective using route parameters.

👤 User Authentication:
POST /auth/register: user registration (passwords must be at least 6 characters, with one uppercase and one lowercase).

POST /auth/login: user login and JWT token generation.



[DEMO RENDER](https://proyect-7-backend.onrender.com/api/autos)
