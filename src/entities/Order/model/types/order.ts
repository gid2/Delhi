import { Dish } from 'entities/Dish/model/types/dish';

type DishOrder = Pick<Dish, 'id' | 'name' | 'weight' | 'sharpness' | 'price' | 'image'> & {count: number}

enum PaymentMethod {
    SPB = 'spb',
    CardOnline = 'card_online',
    Cash = 'cash',
    CardToCourier = 'card_to_courier'
}

enum OrderStatus {
    Pending = 'pending',
    Confirmed = 'confirmed',
    Preparing = 'preparing',
    ReadyForDelivery = 'ready_for_delivery',
    InTransit = 'in_transit',
    Delivered = 'delivered',
    Cancelled = 'cancelled',
    Returned = 'returned'
}

export interface Order {
    dishOrders: DishOrder[];
    totalPrice: string;
    paymentMethod?: PaymentMethod;
    leaveAtTheDoor?: boolean;
    confirmOrderPhone?: boolean;
    address?: string;
    status: OrderStatus;
}
