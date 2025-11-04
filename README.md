# 🛒 Supermarket List App

Aplicación móvil desarrollada con React Native que permite administrar una lista de supermercado utilizando una base de datos local SQLite. Permite agregar, editar y eliminar productos, mostrando mensajes de confirmación mediante un modal personalizado.

### Tecnologías utilizadas

* React Native
* Expo
* SQLite (expo-sqlite)
* React Navigation (@react-navigation/native, @react-navigation/native-stack)

### Requisitos
Antes de comenzar, asegúrate de tener instalados:
* Node.js (v18+ recomendada)
* npm o yarn
* Expo CLI: npm install -g expo-cli
* Un emulador de Android/iOS o un dispositivo físico con Expo Go instalado.

### Instalación

1. Clonar el repositorio:
   > git clone https://github.com/o0laf/SupermarketList.git
   
   > cd supermarket-list

2. Instalar dependencias:
   npm install
o si usas yarn
yarn install

3. Iniciar Expo:
   expo start

Esto abrirá Expo Dev Tools en el navegador. Desde allí puedes:

- Escanear el código QR con Expo Go en tu dispositivo móvil.

- Abrir el proyecto en un emulador Android/iOS.

### Funcionalidades

* **Lista de productos**: Muestra todos los productos agregados.
* **Agregar producto**: Permite crear un nuevo producto con nombre y cantidad.
* **Editar producto**: Permite modificar un producto existente.
* **Eliminar producto**: Elimina un producto con confirmación mediante modal.
