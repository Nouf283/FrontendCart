export class Cart {
    id?: number;
    customerId: number = 0;
    totalPrice: number = 0;
    totalDiscount: number = 0;
    totalAmount: number = 0;
    cartItems: CartItem[] = [];
}

export class CartItem {
    id?: number;
    cartId: number = 0;
    productId: number = 0;
    quantity: number = 0;
    unitPrice: number = 0;
    discount: number = 0;
    totalPrice: number = 0;
    // createdAt?: string;
    // updatedAt?: string;
}

