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