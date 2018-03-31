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

 export class productInfo
 {
    $key: string;
    name: string
 }

export class empsales
{
      // displayedColumns=['date','time','quantity','price','pay','remains'];
    date;
    time:string;
    quantity:number; 
    price:number;
    pay:number;
    remains:number;
    Id:number;
   
}
 export class ItemInfo
 {
    date:string;
    time:string;
    cost:number;
    price:number;
    quantity:number;
    employeename:string;
 }
// displayedColumns=['date','checkIn','checkOut','totalShiftTime']
export class shift
{
    date;
    checkIn;
    checkOut;
    totalShiftTime;
}
   
