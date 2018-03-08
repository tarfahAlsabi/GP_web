export class Receipt {
    $key: string;
    ReceivedAmount: number;
    RemainingAmount: number;
    date: Date;
    employeeID:string;
    products: InnerProduct[];
    id: string;
    time:string;
    totalPrice: number;
}
export class InnerProduct{
    $key: string;
    category: string;
    price: number;
    quantity: number;

 }
