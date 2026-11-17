# Implementación de un carrito de compras en React

El objetivo es desarrollar una aplicación de carrito de compras en React que incluya un catálogo de productos, un carrito y un resumen de pedido. La aplicación consumirá una API para obtener los datos del catálogo y manejar las operaciones del carrito. Los productos tendrán atributos como nombre, precio y descripción. El carrito deberá mostrar los productos agregados con su cantidad y precio total. El resumen de pedido mostrará el total a pagar y los detalles de los productos seleccionados.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Carrito de compras |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 10 horas |

## Stack

- **Lenguaje:** TypeScript
- **Framework:** React 19
- **Version:** Node 20

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Configuración del proyecto y consumo de la API

**Objetivo:** Configurar el proyecto React y consumir la API para obtener el catálogo de productos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Configurar el proyecto React con TypeScript.
- Utilizar React Query para consumir la API y obtener el catálogo de productos.
- Mostrar los productos en el catálogo con sus atributos.

**Entregable:** Aplicación React que muestra el catálogo de productos con nombre, precio y descripción.

<details>
<summary>Pistas de conocimiento</summary>

- Configuración de un proyecto React con TypeScript.
- Uso de React Query para consumir APIs.

</details>

### Fase 2: Implementación del carrito de compras

**Objetivo:** Implementar la funcionalidad del carrito de compras para agregar y eliminar productos.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Agregar funcionalidad para agregar productos al carrito.
- Mostrar los productos agregados al carrito con su cantidad y precio total.
- Permitir eliminar productos del carrito.

**Entregable:** Aplicación React que permite agregar y eliminar productos del carrito, mostrando los productos agregados con su cantidad y precio total.

<details>
<summary>Pistas de conocimiento</summary>

- Manejo del estado en React para el carrito.
- Implementación de funcionalidades de agregar y eliminar productos.

</details>

### Fase 3: Resumen de pedido y total a pagar

**Objetivo:** Mostrar un resumen del pedido con el total a pagar y los detalles de los productos seleccionados.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Mostrar un resumen del pedido con el total a pagar.
- Mostrar los detalles de los productos seleccionados en el carrito.
- Asegurar que el total a pagar se actualice correctamente al agregar o eliminar productos.

**Entregable:** Aplicación React que muestra un resumen del pedido con el total a pagar y los detalles de los productos seleccionados.

<details>
<summary>Pistas de conocimiento</summary>

- Cálculo del total a pagar en el carrito.
- Mostrar información del pedido en la interfaz de usuario.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un carrito de compras en el contexto de una aplicación React?
- **paraQueSirve**: ¿Para qué sirve el carrito de compras en la experiencia del usuario?
- **comoSeUsa**: ¿Cómo se usa React Query para consumir una API en una aplicación React?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar un carrito de compras en React?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación de un carrito de compras en términos de estado y actualización de la interfaz de usuario?

## Criterios de Evaluacion

- Configuración correcta del proyecto React con TypeScript.
- Consumo correcto de la API utilizando React Query.
- Implementación funcional del carrito de compras para agregar y eliminar productos.
- Mostrar correctamente el resumen del pedido con el total a pagar y los detalles de los productos seleccionados.

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Configuración del proyecto y consumo de la API | Consumo de API con manejo de errores | `src/shared/services/ProductApiClient.ts:ProductApiClient` | La aplicación muestra el catálogo de productos con nombre, precio y descripción.; La aplicación maneja errores de conexión con la API mostrando un mensaje adecuado. | — | — |
| f1 — Configuración del proyecto y consumo de la API | Visualización de datos con manejo de estados | `src/features/products/ProductCatalog.tsx:ProductCatalog` | La aplicación muestra el catálogo de productos con nombre, precio y descripción.; La aplicación maneja errores de conexión con la API mostrando un mensaje adecuado. | — | — |
| f2 — Implementación del carrito de compras | Gestión de estado del carrito con validaciones | `src/shared/services/CartService.ts:CartService` | La aplicación permite agregar productos al carrito con cantidad y precio.; La aplicación permite eliminar productos del carrito.; La aplicación valida que no se puedan agregar cantidades negativas o cero.; La aplicación muestra el total acumulado del carrito. | — | — |
| f2 — Implementación del carrito de compras | Visualización y gestión del carrito | `src/features/cart/CartView.tsx:CartView` | La aplicación permite agregar productos al carrito con cantidad y precio.; La aplicación permite eliminar productos del carrito.; La aplicación valida que no se puedan agregar cantidades negativas o cero.; La aplicación muestra el total acumulado del carrito. | — | — |
| f3 — Resumen de pedido y total a pagar | Cálculo de resumen de pedido con reglas de negocio | `src/shared/services/OrderSummaryService.ts:OrderSummaryService` | La aplicación muestra un resumen del pedido con el total a pagar.; La aplicación muestra los detalles de los productos seleccionados en el resumen.; La aplicación maneja casos donde el carrito está vacío.; La aplicación calcula correctamente descuentos o impuestos si aplica. | — | — |
| f3 — Resumen de pedido y total a pagar | Visualización de resumen de pedido | `src/features/order/OrderSummaryView.tsx:OrderSummaryView` | La aplicación muestra un resumen del pedido con el total a pagar.; La aplicación muestra los detalles de los productos seleccionados en el resumen.; La aplicación maneja casos donde el carrito está vacío.; La aplicación calcula correctamente descuentos o impuestos si aplica. | — | — |

## Pruebas de aceptacion

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

## Herramientas

- **TypeScript**: Tecnologia pedida para este reto: forma parte del stack con el que se resuelve el ejercicio.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
