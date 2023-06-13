
export interface IOrder {

    _id?: string;
    user?: string;
    address?: string;
    phone?: string;
    orderItems: IOrderItem[];
    paymentResult?: string;

    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;

    isPaid: boolean;
    paidAt?: string;

    transactionId?: string;
    createdAt?: string;
    updatedAt?: string;
}


export interface IOrderItem {
    _id: string;
    title: string;
    taxes: number;
    quantity: number;
    slug: string;
    image: string;
    price: number;
}


export interface ShippingAddress {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    zip: string;
    city: string;
    country: string;
    phone: string;
}