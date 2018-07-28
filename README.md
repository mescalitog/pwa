# Demo de Aplicacion Web Progresiva (pwa)
[![Build Status](https://travis-ci.com/mescalitog/pwa.svg?branch=master)](https://travis-ci.com/mescalitog/pwa)

Este es un demo una una aplicacion web progresiva creada por [iTStuff](https://itstuff.com.ar) utilizando Angular 6, Node y Express

### Demo

Se puede ver la app funcionando en https://itstuff.com.ar/pwa

### Instalacion

- Clonar el repositorio 
```
git clone https://github.com/mescalitog/pwa.git <project_name>
```
- Instalacion de las dependencias
```
cd <project_name>
npm install
```

### Ejecución

- Build
```
npm run build-prod
```
lo hacemos en entorno de produccion para generar el service-worker

- ejecucion
```
npm run serve
```
la aplicacion se ejecuta con el siguiente mensaje
```
  La app se inicio en en http://localhost:3000 in development mode
  Precionar CTRL-C para detenerla
```
en ese momento esta disponible en http://localhost:3000

### Auditoria

Es posible realizar una auditoria con Lighthouse, siguiente las instrucciones de [Auditar apps web con Lighthouse](https://developers.google.com/web/tools/lighthouse/)





