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