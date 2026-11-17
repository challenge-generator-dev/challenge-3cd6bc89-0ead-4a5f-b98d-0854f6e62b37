# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de un carrito de compras en React**.

| | |
|---|---|
| Tema | Carrito de compras |
| Nivel | advanced-l2 |
| Chapter | Frontend |
| Especialidad | React |
| Stack | TypeScript / React 19 |
| Patron arquitectonico | patrón contenedor/presentacional con manejo de estado centralizado |
| Tiempo estimado | 10 horas |

## Herramientas

- **TypeScript**: Tecnologia pedida para este reto: forma parte del stack con el que se resuelve el ejercicio.

## Receta del stack

Esqueleto obligatorio:

- `package.json, vite.config.ts y tsconfig.json en la raiz`
- `src/main.tsx como entry point`
- `src/app con el arbol de rutas`
- `src/features con componentes contenedores y sus hooks`
- `src/shared con componentes presentacionales`
- `src/services con los clientes HTTP`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET. `@types/react-router-dom` ya no se publica para v6+, React Router trae sus tipos.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.

Dependencias:

- axios 1.21.1
- react 18.3.1
- react-dom 18.3.1
- @types/react 18.3.31
- @types/react-dom 18.3.7
- @vitejs/plugin-react 4.7.0
- typescript 5.7.3
- vite 5.4.21

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install --no-audit --no-fund && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Configuración del proyecto y consumo de la API**: Aplicación React que muestra el catálogo de productos con nombre, precio y descripción.
- **Fase 2 — Implementación del carrito de compras**: Aplicación React que permite agregar y eliminar productos del carrito, mostrando los productos agregados con su cantidad y precio total.
- **Fase 3 — Resumen de pedido y total a pagar**: Aplicación React que muestra un resumen del pedido con el total a pagar y los detalles de los productos seleccionados.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/shared/services/ProductApiClient.ts` — La pieza p1 (Consumo de API con manejo de errores, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/features/products/ProductCatalog.tsx` — La pieza p2 (Visualización de datos con manejo de estados, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/shared/services/CartService.ts` — La pieza p3 (Gestión de estado del carrito con validaciones, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/features/cart/CartView.tsx` — La pieza p4 (Visualización y gestión del carrito, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/shared/services/OrderSummaryService.ts` — La pieza p5 (Cálculo de resumen de pedido con reglas de negocio, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/features/order/OrderSummaryView.tsx` — La pieza p6 (Visualización de resumen de pedido, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).

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

## Pruebas de aceptacion y ubicacion de la logica

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

La logica de cada pieza va en su archivo; no la muevas a otro.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (17)

- `src/main.tsx`
- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- `index.html`
- `src/vite-env.d.ts`
- `src/shared/models/Product.ts`
- `src/shared/models/Cart.ts`
- `src/shared/models/OrderSummary.ts`
- `src/shared/repositories/ProductRepository.ts`
- `src/shared/services/ProductApiClient.ts`
- `src/features/products/ProductCatalog.tsx`
- `src/shared/services/CartService.ts`
- `src/features/cart/CartView.tsx`
- `src/shared/services/OrderSummaryService.ts`
- `src/features/order/OrderSummaryView.tsx`
- `src/shared/repositories/CartRepository.ts`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `src/features/products` (presente)
- `src/features/cart` (presente)
- `src/features/order` (presente)
- `src/shared/models` (presente)
- `src/shared/services` (presente)
- `src/shared/repositories` (presente)
- `src/shared/hooks` (ausente)
- `src/shared/components` (ausente)
- `src/shared/utils` (ausente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **patrón contenedor/presentacional con manejo de estado centralizado**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología React, Advanced L2
- Brecha que el reto ataca: Aplicacion React de carrito de compras con catalogo, carrito y resumen de pedido consumiendo una API

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
