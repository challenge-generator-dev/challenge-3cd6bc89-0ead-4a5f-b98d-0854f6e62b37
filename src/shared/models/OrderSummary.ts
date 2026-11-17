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