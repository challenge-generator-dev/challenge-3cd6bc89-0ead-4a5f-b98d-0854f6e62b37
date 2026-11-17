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