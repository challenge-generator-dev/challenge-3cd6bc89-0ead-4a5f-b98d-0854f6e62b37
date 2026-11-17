// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Product } from '../models/Product';
import { ProductRepository } from '../repositories/ProductRepository';
import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export class ProductApiClient implements ProductRepository {
    private axiosInstance = axios.create({
        baseURL: API_BASE_URL,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    async getProducts(): Promise<Product[]> {
      throw new Error('TODO(reto): getProducts');
    }

    async getProductById(id: string): Promise<Product> {
      throw new Error('TODO(reto): getProductById');
    }

    private transformProducts(products: unknown[]): Product[] {
      throw new Error('TODO(reto): transformProducts');
    }

    private transformProduct(raw: unknown): Product | null {
      throw new Error('TODO(reto): transformProduct');
    }
}

export const productApiClient = new ProductApiClient();