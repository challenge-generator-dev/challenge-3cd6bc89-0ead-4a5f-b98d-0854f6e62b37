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