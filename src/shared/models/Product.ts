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