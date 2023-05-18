## Esta es una API que se conecta con Mongo DB

### Configurar un mongo local
Para configurar un mongo local con docker pude correr el siguiente comando
```
docker run -d -p 27017:27017 -v dirLocal:/data/db mongo:latest
```

### Correr la aplicacion

Instalar las dependencias
```
    npm install 
```

Para correr la aplicacion en forma local
```
npm run dev
```

Para correr la aplicacion de produccion
```
npm start
```

Para vincular a un proyecto de railway se debe seguir los siguiente pasaso
 * Tener o crear una cuenta en [railwaiy](https://railway.app/)
 * Instalarse el [CLI](https://docs.railway.app/develop/cli) ```npm i -g @railway/cli```
 * Crear un proyecto nuevo
 * Logearse a railway desde la consola ```railway login```
 * Vincular el proyecto, eligiendo el proyecto creado anteriormente ```railway link``` 
 * Crear el servicio de mongo db dentro de railway
 * Desplegar el proyecto ```railway up```
 * Ajustar la variable de entrono MONGO_URL a la URL de conexion con mongo
 * Enjoy It

### Librerias
Esta app utiliza la siguiente librerias

* nodemon (dev)
* express 
* mongoose 