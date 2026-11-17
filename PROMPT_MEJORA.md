# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/shared/services/ProductApiClient.ts` — La pieza p1 (Consumo de API con manejo de errores, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/features/products/ProductCatalog.tsx` — La pieza p2 (Visualización de datos con manejo de estados, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/shared/services/CartService.ts` — La pieza p3 (Gestión de estado del carrito con validaciones, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/features/cart/CartView.tsx` — La pieza p4 (Visualización y gestión del carrito, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/shared/services/OrderSummaryService.ts` — La pieza p5 (Cálculo de resumen de pedido con reglas de negocio, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/features/order/OrderSummaryView.tsx` — La pieza p6 (Visualización de resumen de pedido, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).

## Herramientas

- **TypeScript**: Tecnologia pedida para este reto: forma parte del stack con el que se resuelve el ejercicio.

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Advanced L2

### Brecha de conocimiento
Aplicacion React de carrito de compras con catalogo, carrito y resumen de pedido consumiendo una API

### Reto
- Tema: Carrito de compras
- Seniority: advanced-l2
- Tipo: practical
- Título: Implementación de un carrito de compras en React
- Tiempo estimado: 10 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del proyecto y consumo de la API — objetivo: Configurar el proyecto React y consumir la API para obtener el catálogo de productos. — entregable (NO resolver): Aplicación React que muestra el catálogo de productos con nombre, precio y descripción.
- Fase 2: Implementación del carrito de compras — objetivo: Implementar la funcionalidad del carrito de compras para agregar y eliminar productos. — entregable (NO resolver): Aplicación React que permite agregar y eliminar productos del carrito, mostrando los productos agregados con su cantidad y precio total.
- Fase 3: Resumen de pedido y total a pagar — objetivo: Mostrar un resumen del pedido con el total a pagar y los detalles de los productos seleccionados. — entregable (NO resolver): Aplicación React que muestra un resumen del pedido con el total a pagar y los detalles de los productos seleccionados.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProductCatalog } from './features/products/ProductCatalog';
import { CartView } from './features/cart/CartView';
import { OrderSummaryView } from './features/order/OrderSummaryView';
import { ProductApiClient } from './shared/services/ProductApiClient';
import { InMemoryCartRepository } from './shared/repositories/CartRepository';
import { CartService } from './shared/services/CartService';
import { OrderSummaryService } from './shared/services/OrderSummaryService';

const queryClient = new QueryClient();

const cartRepository = new InMemoryCartRepository();
const cartService = new CartService(cartRepository);
const orderSummaryService = new OrderSummaryService();

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProductCatalog
        productRepository={new ProductApiClient()}
        cartService={cartService}
      />
    ),
  },
  {
    path: '/cart',
    element: <CartView cartService={cartService} />,
  },
  {
    path: '/order-summary',
    element: (
      <OrderSummaryView
        cart={cartService.getCart()}
        orderSummaryService={orderSummaryService}
      />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// === ARCHIVO: package.json ===
{
  "name": "reto-react",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc --noEmit && vite build"
  },
  "dependencies": {
    "@tanstack/react-query": "5.108.0",
    "axios": "1.21.1",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-router-dom": "7.18.5"
  },
  "devDependencies": {
    "@types/react": "18.3.31",
    "@types/react-dom": "18.3.7",
    "@vitejs/plugin-react": "4.7.0",
    "typescript": "5.7.3",
    "vite": "5.4.21"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.ts",
    "src/**/*.spec.tsx"
  ]
}

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()] });

// === ARCHIVO: index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reto</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: src/vite-env.d.ts ===
/// <reference types="vite/client" />

// === ARCHIVO: src/shared/models/Product.ts ===
/**
 * Modelo de dominio para productos.
 * Representa un producto en el catálogo con sus atributos básicos.
 */
export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl?: string;
};

// === ARCHIVO: src/shared/models/Cart.ts ===
/**
 * Modelo de dominio para el carrito de compras.
 * Contiene los productos seleccionados y calcula el total.
 */
import type { Product } from './Product';

export type CartItem = {
    product: Product;
    quantity: number;
};

export type Cart = {
    items: CartItem[];
    total: number;
};

/**
 * Calcula el total del carrito sumando el precio de cada producto multiplicado por su cantidad.
 * @param items - Array de items en el carrito
 * @returns Total del carrito
 */
export const calculateCartTotal = (items: CartItem[]): number => {
    return items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
};

export type { Product };

// === ARCHIVO: src/shared/models/OrderSummary.ts ===
/**
 * Modelo de dominio para el resumen del pedido.
 * Incluye los items del carrito, subtotal, impuestos y total.
 */
import type { CartItem } from './Cart';

export type OrderSummary = {
    items: CartItem[];
    subtotal: number;
    tax: number;
    total: number;
};

/**
 * Calcula el resumen del pedido basado en los items del carrito.
 * @param items - Array de items en el carrito
 * @param taxRate - Tasa de impuesto (ej: 0.1 para 10%)
 * @returns Resumen del pedido con subtotal, impuestos y total
 */
export const calculateOrderSummary = (items: CartItem[], taxRate: number = 0.1): OrderSummary => {
    const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    return {
        items,
        subtotal,
        tax,
        total
    };
};

// === ARCHIVO: src/shared/repositories/ProductRepository.ts ===
/**
 * Interfaz para el repositorio de productos.
 * Define los contratos para acceder a los datos de productos.
 */
import type { Product } from '../models/Product';

export interface ProductRepository {
    /**
     * Obtiene todos los productos disponibles.
     * @returns Promise con un array de productos
     */
    getProducts(): Promise<Product[]>;

    /**
     * Obtiene un producto por su ID.
     * @param id - ID del producto
     * @returns Promise con el producto encontrado
     * @throws Error si el producto no existe
     */
    getProductById(id: string): Promise<Product>;
}

// === ARCHIVO: src/shared/services/ProductApiClient.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Product } from '../models/Product';
import { ProductRepository } from '../repositories/ProductRepository';
import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export class ProductApiClient implements ProductRepository {
    private axiosInstance = axios.create({
        baseURL: API_BASE_URL,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    async getProducts(): Promise<Product[]> {
      throw new Error('TODO(reto): getProducts');
    }

    async getProductById(id: string): Promise<Product> {
      throw new Error('TODO(reto): getProductById');
    }

    private transformProducts(products: unknown[]): Product[] {
      throw new Error('TODO(reto): transformProducts');
    }

    private transformProduct(raw: unknown): Product | null {
      throw new Error('TODO(reto): transformProduct');
    }
}

export const productApiClient = new ProductApiClient();

// === ARCHIVO: src/features/products/ProductCatalog.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useEffect } from 'react';
import { Product } from '../../shared/models/Product';
import { ProductRepository } from '../../shared/repositories/ProductRepository';
import { CartService } from '../../shared/services/CartService';

interface ProductCatalogProps {
    productRepository: ProductRepository;
    cartService: CartService;
}

type CatalogState = {
    products: Product[];
    isLoading: boolean;
    error: string | null;
};

export function ProductCatalog({ productRepository, cartService }: ProductCatalogProps): JSX.Element {
  throw new Error('TODO(reto): anonymous');
}

// === ARCHIVO: src/shared/services/CartService.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Product } from '../models/Product';
import { Cart, CartItem, calculateCartTotal } from '../models/Cart';
import { CartRepository } from '../repositories/CartRepository';

export class CartService {
    private cart: Cart = {
        items: [],
        total: 0
    };

    constructor(private cartRepository: CartRepository) {
        this.loadCart();
    }

    private async loadCart(): Promise<void> {
      throw new Error('TODO(reto): loadCart');
    }

    addProduct(product: Product, quantity: number): void {
      throw new Error('TODO(reto): addProduct');
    }

    removeProduct(productId: string): void {
      throw new Error('TODO(reto): removeProduct');
    }

    updateQuantity(productId: string, quantity: number): void {
      throw new Error('TODO(reto): updateQuantity');
    }

    getCart(): Cart {
      throw new Error('TODO(reto): getCart');
    }

    clearCart(): void {
      throw new Error('TODO(reto): clearCart');
    }

    private async persistCart(): Promise<void> {
      throw new Error('TODO(reto): persistCart');
    }
}

// === ARCHIVO: src/features/cart/CartView.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useEffect } from 'react';
import { Cart } from '../../shared/models/Cart';
import { CartService } from '../../shared/services/CartService';

interface CartViewProps {
    cartService: CartService;
}

export function CartView({ cartService }: CartViewProps): JSX.Element {
  throw new Error('TODO(reto): anonymous');
}

// === ARCHIVO: src/shared/services/OrderSummaryService.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Cart, CartItem } from '../models/Cart';
import { OrderSummary } from '../models/OrderSummary';

const DEFAULT_TAX_RATE = 0.1;
const DEFAULT_DISCOUNT_RATE = 0;

export class OrderSummaryService {
    private taxRate: number;
    private discountRate: number;

    constructor(taxRate: number = DEFAULT_TAX_RATE, discountRate: number = DEFAULT_DISCOUNT_RATE) {
        this.taxRate = taxRate;
        this.discountRate = discountRate;
    }

    getSummary(cart: Cart): OrderSummary {
      throw new Error('TODO(reto): getSummary');
    }

    private calculateSubtotal(items: CartItem[]): number {
      throw new Error('TODO(reto): calculateSubtotal');
    }

    private calculateDiscount(subtotal: number): number {
      throw new Error('TODO(reto): calculateDiscount');
    }

    private calculateTax(amount: number): number {
      throw new Error('TODO(reto): calculateTax');
    }

    private createEmptySummary(): OrderSummary {
      throw new Error('TODO(reto): createEmptySummary');
    }

    setTaxRate(rate: number): void {
      throw new Error('TODO(reto): setTaxRate');
    }

    setDiscountRate(rate: number): void {
      throw new Error('TODO(reto): setDiscountRate');
    }

    getTaxRate(): number {
        return this.taxRate;
    }

    getDiscountRate(): number {
        return this.discountRate;
    }
}

// === ARCHIVO: src/features/order/OrderSummaryView.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useEffect } from 'react';
import { OrderSummary } from '../../shared/models/OrderSummary';
import { OrderSummaryService } from '../../shared/services/OrderSummaryService';
import { Cart } from '../../shared/models/Cart';

interface OrderSummaryViewProps {
    cart: Cart;
    orderSummaryService?: OrderSummaryService;
}

interface ViewState {
    summary: OrderSummary | null;
    isLoading: boolean;
    error: string | null;
}

export function OrderSummaryView({ cart, orderSummaryService }: OrderSummaryViewProps): JSX.Element {
  throw new Error('TODO(reto): anonymous');
}

// === ARCHIVO: src/shared/repositories/CartRepository.ts ===
import type { Cart, CartItem } from '../models/Cart';
import type { Product } from '../models/Product';

/**
 * Interfaz para el repositorio del carrito de compras.
 * Define el contrato para persistir y recuperar el estado del carrito.
 */
export interface CartRepository {
    /**
     * Guarda el carrito en el almacenamiento.
     * @param cart - Carrito a persistir
     */
    saveCart(cart: Cart): Promise<void>;
    
    /**
     * Agrega un producto al carrito.
     * @param product - Producto a agregar
     * @param quantity - Cantidad del producto
     */
    addItem(product: Product, quantity: number): Promise<Cart>;
    
    /**
     * Elimina un producto del carrito.
     * @param productId - ID del producto a eliminar
     */
    removeItem(productId: string): Promise<Cart>;
    
    /**
     * Actualiza la cantidad de un producto en el carrito.
     * @param productId - ID del producto
     * @param quantity - Nueva cantidad
     */
    updateItemQuantity(productId: string, quantity: number): Promise<Cart>;
    
    /**
     * Limpia todos los items del carrito.
     */
    clearCart(): Promise<void>;
}

/**
 * Implementación en memoria del repositorio del carrito.
 * Persiste los datos en el sessionStorage del navegador.
 */
export class InMemoryCartRepository implements CartRepository {
    private readonly STORAGE_KEY = 'shopping_cart';
    private cart: Cart = { items: [], total: 0 };

    constructor() {
        this.loadFromStorage();
    }

    private loadFromStorage(): void {
        try {
            const stored = sessionStorage.getItem(this.STORAGE_KEY);
            if (stored) {
                this.cart = JSON.parse(stored);
            }
        } catch {
            this.cart = { items: [], total: 0 };
        }
    }

    private saveToStorage(): void {
        try {
            sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cart));
        } catch (error) {
            console.error('Error saving cart to storage:', error);
        }
    }

    async saveCart(cart: Cart): Promise<void> {
        this.cart = { ...cart };
        this.saveToStorage();
    }

    async addItem(product: Product, quantity: number): Promise<Cart> {
        const existingIndex = this.cart.items.findIndex(
            item => item.product.id === product.id
        );

        if (existingIndex >= 0) {
            this.cart.items[existingIndex].quantity += quantity;
        } else {
            this.cart.items.push({ product, quantity });
        }

        this.cart.total = this.cart.items.reduce(
            (sum, item) => sum + (item.product.price * item.quantity),
            0
        );

        this.saveToStorage();
        return { ...this.cart };
    }

    async removeItem(productId: string): Promise<Cart> {
        this.cart.items = this.cart.items.filter(
            item => item.product.id !== productId
        );

        this.cart.total = this.cart.items.reduce(
            (sum, item) => sum + (item.product.price * item.quantity),
            0
        );

        this.saveToStorage();
        return { ...this.cart };
    }

    async updateItemQuantity(productId: string, quantity: number): Promise<Cart> {
        const item = this.cart.items.find(i => i.product.id === productId);
        
        if (item) {
            if (quantity <= 0) {
                return this.removeItem(productId);
            }
            item.quantity = quantity;
        }

        this.cart.total = this.cart.items.reduce(
            (sum, item) => sum + (item.product.price * item.quantity),
            0
        );

        this.saveToStorage();
        return { ...this.cart };
    }

    async clearCart(): Promise<void> {
        this.cart = { items: [], total: 0 };
        this.saveToStorage();
    }
}
```
