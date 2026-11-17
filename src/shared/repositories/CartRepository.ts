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