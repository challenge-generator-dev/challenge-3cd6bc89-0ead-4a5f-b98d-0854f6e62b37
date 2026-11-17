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