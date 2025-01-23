# CRUD-NoSQL
Evaluar y comparar el rendimiento de dos sistemas de bases de datos no relacionales (NoSQL) para las principales operaciones CRUD (Create, Read, Update, Delete), así como documentar de forma clara y detallada el proceso de instalación, preparación del ambiente de desarrollo y los resultados obtenidos.


# Comparación de Rendimiento entre MongoDB y Redis

Este repositorio contiene un análisis comparativo del rendimiento de **MongoDB** y **Redis** en operaciones de creación, lectura, actualización y eliminación sobre un conjunto de datos de 10,000 registros. A continuación, se describe el proceso de instalación, configuración y ejecución de las pruebas.

## Requisitos del Sistema

### Hardware:
- Procesador: **AMD Ryzen 5 4600H**
- RAM: **8GB**
- Almacenamiento: **SSD 512GB**

### Software:
- **Sistema Operativo:** Ubuntu 20.04 LTS
- **Docker y Docker Compose**: Para crear los contenedores de MongoDB y Redis.
- **Node.js y npm**: Para instalar Redis Commander y ejecutar los scripts de prueba.
- **MongoDB Compass**: Para visualizar los datos de MongoDB.
- **Redis Commander**: Para visualizar los datos de Redis.

## Instalación y Configuración

### 1. Instalación de Docker y Docker Compose

1. Actualice los repositorios de su sistema:
   ```bash
   sudo apt update

sudo apt install -y docker.io docker-compose

Verifique que Docker esté instalado correctamente
docker --version
docker-compose --version

Levante los contenedores utilizando el siguiente comando:
sudo docker-compose up -d

Verifique que los contenedores estén funcionando correctamente:
sudo docker ps -a


3. Instalación de MongoDB Compass
Descargue el archivo .deb desde la página oficial de MongoDB Compass.
Instale el paquete descargado:
sudo dpkg -i mongodb-compass_1.45.1_amd64.deb

4. Instalación de Redis Commander
Instale Redis Commander utilizando npm:
npm install -g redis-commander

Inicie Redis Commander:
redis-commander


5. Scripts de Prueba
Prepare los scripts en JavaScript para realizar las operaciones de creación, lectura, actualización y eliminación tanto en MongoDB como en Redis.
Ejecute los scripts y registre los tiempos de ejecución promedio. Cada operación debe ser ejecutada 5 veces para obtener el tiempo promedio.
6. Ejecutar las Pruebas
Las pruebas se realizarán para cada operación de la siguiente manera:

Create: Inserción masiva de datos.
Read: Consulta por clave primaria (ID), filtrado y búsquedas agregadas.
Update: Actualización de registros con valores específicos.
Delete: Eliminación de registros con valores específicos.



