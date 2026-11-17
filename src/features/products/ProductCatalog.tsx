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