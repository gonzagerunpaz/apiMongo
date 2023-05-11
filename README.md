## Esta es una API que se conecta con Mongo DB

### Configurar un mongo local
Para configurar un mongo local con docker pude correr el siguiente comando
```
docker run -d -p 27017:27017 -v dirLocal:/data/db mongo:latest
```

### Correr la aplicacion
Para correr la aplicacion en forma local
```
npm run dev
```

Para correr la aplicacion de produccion
```
npm start
```

### Librerias
Esta app utiliza la siguiente librerias

* nodemon (dev)
* express 
* mongosse 