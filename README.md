# Sistema de Gestión para Tiendas

## Delizia Gourmet

### Nombres y roles del grupo

- **Backend Developer**: Responsable del desarrollo del servidor y la conexión con la base de datos. Jose Daniel Soto Castro Backend Developer

- **Frontend Developer**: Encargado de la interfaz y la experiencia de usuario. Brayan Samboni Martínez

- **DB Manager**:  Diseña y administra la base de datos en MongoDB. Joaquín Emilio Quintero Carabali

-  **Líder del Proyecto**: Coordina las tareas y gestiona el repositorio en GitHub. Juan Camilo López Beltrán

  
### Descripción del sistema

Este es un  sistema de gestión para la tienda **Delizia Gourmet**, una empresa de entrega de comida, desarrollado utilizando la pila **MERN** (MongoDB, Express, React, Node.js) con la finalidad del control y administración de los clientes y productos por parte de los encargados de la tienda.

### Funcionalidades

- **Página de inicio**: (Personalizada según la temática de la tienda)

- **Gestión de Productos**: (Creación de productos, listado de productos)

- **Gestión de clientes**: (Registro y listado de clientes)

- **Estadística Básicas**: Tales como numero total de clientes y productos registrados. Filtros basicos de información.

- **Diseño Responsive**: (Interfaz amigable a dispositivos móviles y de escritorios)

### Tecnologías Usadas

-  **Frontend**: Desarrollo en **React.js** con **TypeScript**

  

  

-  **Backend**: Desarrolló en **Node.js** con **Express**

-  **Base de datos**  **MongoDB** para almacenar información de productos.

-  **Control de código**: Uso de **GitHub** para la gestión del proyecto

### Requisitos

-  [Node.js](https://nodejs.org/) - Entorno de ejecución de TypeScript

-  [MongoDB](https://www.mongodb.com/) - Base de datos NoSQL

  
## Diagrama de la base de datos
```mermaid

erDiagram

    CLIENTS ||--O{ PRODUCTS : "want"
    CLIENTS{
        ObjectId id PK
        String name
        String email
        String address
        string city
        String tel_numb
        date reg_date
    }

    PRODUCTS |{--|| CATEGORIES : "belongs to"
    PRODUCTS{
        ObjectId id PK
        String name
        String description
        String ingredients
        ObjectId category FK
        Number stock
        Number price
        String image
    }

    CATEGORIES {
        ObjectId id
        String name
        String description
        String image
        Date creat_date
    }

    Delizia-Gourmet ||--o{ CLIENTS : "have"

```
### Instalación y Configuración

  
1. Clona el repositorio:

```bash

git  clone  https://github.com/BeJotaTriple/Delizia-Gourmet.git

cd  Delizia-Gourmet
```

2. Instalar las dependencias necearías tanto en la carpetas del Backend y Frontend en el siguiente comando

```bash
npm  install
```

3. Crea un archivo .env tanto en la carpeta backend y  frontend añade las siguientes variables

  
=> Backend

```bash

PORT  =  5000

MONGO_URL  =  mongodb://localhost:27017/Delizia-Gourmet

```

=> Frontend

```bash

VITE_REACT_APP_API_URL= http://localhost:5000/

```
## Ejecución

1. Inicia el servidor en la carpeta backend:

```bash
cd backend
npm run build
npm start
```
2. Inicia la interfaz del proyecto en la carpeta frontend:

```bash

cd frontend

npm run dev

```

## Endpoints del Backend

Rutas para Clients

    POST /api/clients/ - <Crear un nuevo cliente.>

    GET /api/clients/ - <Obtener todos los clientes.>

    GET /api/clients/:id - <Obtener un cliente específico por su ID.>

    PUT /api/clients/:id - <Actualizar un cliente específico por su ID.>

    DELETE /api/clients/:id - <Eliminar un cliente específico por su ID.>

Rutas para Categories

    POST /api/categories/ - <Crear una nueva categoría.>

    GET /api/categories/ - <Obtener todas las categorías.>

    GET /api/categories/:id - <Obtener una categoría específica por su ID.>

    PUT /api/categories/:id - <Actualizar una categoría específica por su ID.>

    DELETE /api/categories/:id - <Eliminar una categoría específica por su ID.>

Rutas para Products

    POST /api/products/ - <Crear un nuevo producto.>

    GET /api/products/ - <Obtener todos los productos.>

    GET /api/products/:id - <Obtener un producto específico por su ID.>

    PUT /api/products/:id - <Actualizar un producto específico por su ID.>

    DELETE /api/products/:id - <Eliminar un producto específico por su ID.>