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