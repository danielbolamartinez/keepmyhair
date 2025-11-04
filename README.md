# 🧠 keepmyhair

**Una app para ayudar a tratar la tricotilomanía — A PWA designed to help manage trichotillomania.**  
[🌐 keepmyhair.danielbolamartinez.com](https://keepmyhair.danielbolamartinez.com)

---

## 💬 Español

### ✨ Descripción
**keepmyhair** es una aplicación web progresiva (**PWA**) creada para ayudar a las personas con **tricotilomanía**, un trastorno que impulsa a arrancarse el cabello u otros vellos del cuerpo.  
El objetivo es **detectar patrones emocionales o situacionales** que llevan a ese comportamiento, ofreciendo una forma sencilla y visual de registrar cada episodio.

### 🎯 Objetivo
Ayudar a los usuarios a **comprender mejor su relación con la tricotilomanía**, detectar desencadenantes y tomar conciencia de los momentos en que ocurre, fomentando el autoconocimiento y la gestión del hábito.

---

### 🌿 Características principales
- 📅 Registro de episodios con fecha, emoción o contexto.  
- 🔍 Análisis visual para detectar patrones.  
- 💾 Datos almacenados en **IndexedDB** para uso **offline**.  
- 📱 Instalación como **PWA** (app nativa en el móvil).  
- ⚡ Construida con **React + Vite** para un rendimiento óptimo.  

---


## 🧠 Parte técnica

### 🧩 Stack principal
- **React** – interfaz de usuario reactiva y modular.  
- **Vite** – entorno de desarrollo rápido.  
- **IndexedDB** – almacenamiento local persistente.  
- **PWA** – instalación en dispositivos y uso sin conexión.  
- *(Opcional: TailwindCSS si está incluido en el proyecto.)*

---

### ⚙️ Instalación y uso

#### 📱 Guía para instalar una PWA en distintos dispositivos

Una **PWA (Progressive Web App)** se comporta como una aplicación nativa, pero se instala directamente desde el navegador — sin necesidad de Play Store o App Store.

A continuación encontrarás cómo instalar *keepmyhair* o cualquier otra PWA en tu dispositivo.

---

##### 💻 En ordenadores (Windows, macOS, Linux)

###### 🟦 Google Chrome / Microsoft Edge
1. Abre la web:  
   👉 [https://keepmyhair.danielbolamartinez.com](https://keepmyhair.danielbolamartinez.com)
2. Espera unos segundos hasta que aparezca el **icono de instalación** en la barra de direcciones (una flecha hacia abajo o un “+”).
3. Haz clic en **“Instalar aplicación”**.
4. La app se abrirá en una ventana independiente, como cualquier programa del sistema.
5. (Opcional) Ancla el acceso directo al escritorio o a la barra de tareas.

###### 🔵 Firefox
- Firefox aún **no soporta instalación completa de PWAs** en escritorio.  
  Sin embargo, puedes usar **“Agregar a marcadores”** o **“Anclar al dock”** para un acceso rápido.

---

##### 📱 En Android

###### 🌐 Google Chrome
1. Abre la web:  
   👉 [https://keepmyhair.danielbolamartinez.com](https://keepmyhair.danielbolamartinez.com)
2. Espera unos segundos y aparecerá un mensaje emergente:  
   **“Instalar aplicación”** o **“Add keepmyhair to Home screen”**.
3. Toca **Instalar**.
4. La app aparecerá en tu pantalla de inicio y funcionará **sin conexión**.

###### 🟢 Otros navegadores compatibles
También puedes instalar la PWA desde:
- **Edge**  
- **Brave**  
- **Samsung Internet**  

(Sigue los mismos pasos; todos muestran la opción “Agregar a pantalla de inicio”).

---

##### 🍏 En iPhone / iPad (iOS / iPadOS)

###### 🌍 Safari
1. Abre la web:  
   👉 [https://keepmyhair.danielbolamartinez.com](https://keepmyhair.danielbolamartinez.com)
2. Pulsa el icono **Compartir** (el cuadrado con una flecha hacia arriba, en la parte inferior o superior del navegador).
3. Desliza hacia abajo y selecciona **“Agregar a pantalla de inicio”**.
4. Pulsa **Agregar** en la esquina superior derecha.
5. Aparecerá el icono de *keepmyhair* en tu pantalla principal como una app.

> 💡 Nota: en iOS, las PWAs solo se pueden instalar desde **Safari** (no desde Chrome ni Firefox).

---

##### 🧩 Consejos adicionales

- 🔄 Si no aparece la opción “Instalar”, asegúrate de que la web se haya cargado completamente y tenga conexión segura (HTTPS).  
- 📶 Una vez instalada, *keepmyhair* funciona **sin conexión a Internet** gracias a su tecnología **Service Worker** y **IndexedDB**.
- 🧠 Puedes eliminar o reinstalar la app igual que cualquier otra aplicación del sistema.

---

##### 🧠 Resumen rápido

| Plataforma | Navegador recomendado | Instalación | Soporte offline |
|-------------|-----------------------|--------------|-----------------|
| Windows/macOS/Linux | Chrome / Edge | ✅ Sí | ✅ Sí |
| Android | Chrome / Edge / Brave / Samsung Internet | ✅ Sí | ✅ Sí |
| iOS / iPadOS | Safari | ✅ Sí (Agregar a inicio) | ✅ Sí |
| Firefox (desktop) | — | ⚠️ Limitado | ✅ Sí (sin instalación nativa) |

---

✨ *Disfruta de keepmyhair en cualquier dispositivo, con acceso rápido, sin necesidad de tiendas de apps y con soporte offline.*


---

### 📁 Estructura del proyecto

```
keepmyhair/
├── public/              # Archivos estáticos y manifest PWA
├── src/
│   ├── components/      # Componentes de React (tarjetas, modales, etc.)
│   ├── db/              # Lógica para IndexedDB
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Vistas principales
│   └── App.tsx          # Componente raíz
└── vite.config.ts       # Configuración de Vite
```

---

### 📜 Licencia

Este proyecto está bajo la licencia **MIT**.  
Puedes usar, modificar y distribuir el código libremente, siempre que se mantenga el aviso de copyright.

```
MIT License

Copyright (c) 2025 Daniel Bola Martínez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🇬🇧 English

### ✨ Description
**keepmyhair** is a **progressive web app (PWA)** designed to help people with **trichotillomania** — a disorder that causes the urge to pull out one’s hair.  
Its goal is to help users **identify emotional or situational patterns** that trigger the behavior, offering a simple and visual way to record each episode.

### 🎯 Purpose
To help users **understand their habits**, become aware of triggers, and support behavioral awareness in a safe and private way.

---

### 🌿 Key Features
- 📅 Track episodes with date, emotions, or situations.  
- 🔍 Visualize recurring patterns.  
- 💾 Offline support with **IndexedDB**.  
- 📱 Installable as a **PWA**.  
- ⚡ Built with **React + Vite** for high performance.

---

### ⚙️ Installation

```bash
git clone https://github.com/danielbolamartinez/keepmyhair.git
cd keepmyhair
npm install
npm run dev
```

Access the app in your browser and install it from the browser’s PWA install option.

---

### 🧩 Tech Stack
- React  
- Vite  
- IndexedDB  
- PWA  
- (TailwindCSS if present)

---

### 📜 License
Licensed under the **MIT License** — see the LICENSE file for details.

---

👨‍💻 Developed by **Daniel Bola Martínez**
