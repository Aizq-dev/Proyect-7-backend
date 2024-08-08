En este servidor tendremos varios tipos de endpoint, los de tipo get tienen acceso sin estar logeado , los demas debes estar logead:

-Hay un endpoint de tipo GET que te da todos los coches de la coleccion Auto con la direccion http://localhost:4001/api/autos

-Hay un endpoint de tipo GET que da todas las marcas de la coleccion Marca con la direccion : http://localhost:4001/api/marca/

Hay endpoints de tipo GET ,POST, PUT y Delete, para hacre CRUD tanto update como Delete funcionan con la id

Al hacer uso de los enpoints de tipo GET automaticamente vera relacionado en los vehiculos a que marca pertenecen y en las marcas cuales son los modelos que tienen

Aunque ya hay un endpoint tipo Update en los controles de Marca que me deja meter varias id de autos de golpe subiendolos al body, tambien hay un enpoint de Update que dando la id de Marca y la id de Auto si  este ultimo no esta relacionado con la Marca se inserta y si ya esta lo borra.

Hay otro enpoint tupo put en la ruta de autos que elimina o modifica la relacion con la marca, todo esto por params, pones el id del auto /marca/ id de la marca a borrar o modificar y listo.

Hay un endpoint para login en /auth/login y otro para register en /auth/register para los usuarios, las contraseñas deberan tener un minimo de 6 caracteres y minimo una minuscula y una mayuscula