# 📦 Sistema de Inventario

Sistema web para la gestión de productos, con autenticación de usuarios y buscador en tiempo real.

## 🚀 Demo

- **Frontend:** [inventario-frontend-delta.vercel.app](https://inventario-frontend-delta.vercel.app)
- **Backend:** [inventario-backend-production-102b.up.railway.app](https://inventario-backend-production-102b.up.railway.app)

---

## ✨ Funcionalidades

- 🔐 Inicio de sesión con autenticación JWT
- ➕ Agregar productos
- ✏️ Editar productos
- 🗑️ Eliminar productos
- 🔍 Buscador en tiempo real por nombre o categoría

---

## 🛠️ Tecnologías

### Backend
- Java + Spring Boot
- PostgreSQL
- JWT para autenticación
- Desplegado en **Railway**

### Frontend
- Angular + TypeScript
- Desplegado en **Vercel**

---

## 📋 Campos de un producto

| Campo      | Tipo    |
|------------|---------|
| ID         | Número  |
| Nombre     | Texto   |
| Categoría  | Texto   |
| Precio     | Decimal |
| Stock      | Número  |

---

## 🔒 Seguridad

- El acceso a la tabla de productos requiere inicio de sesión
- Cada petición al backend incluye un token JWT mediante un interceptor de Angular
- El backend valida el token antes de responder

---

## 🏗️ Arquitectura

```
Usuario → Angular (Vercel) → Spring Boot (Railway) → PostgreSQL
```

---

## 👤 Autor

Daniel Anzola