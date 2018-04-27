import { Time } from "@angular/common";
import { Employee } from "../../empolyee/shared/employee.model";

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
    name: string;
    totalIncome: number;
    price: number;
    cost: number;
    quantity: number;

 }

 export class NetIncome{
    totalIncome: number;
    employeeSal: number;
    expences: number;
    netIncome: number;
    result: string;
 }

 export class Income{
    revenue: string;
    price: number;
    cost: number;
    totalIncome: number;
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
    date:Date;
    checkIn:Date;
    checkOut:Date;
    totalShiftTime:any;
    ChartshiftTime:any
}

export class FBReceipt
{
    ReceivedAmount;
    RemainingAmount;
    date;
    employeeID;
    id;
    products;
    time;
    totalPrice;
}
export class ReceiptProduct
{
    category;
    price;
    quantity;
}
   
export class empInf
{
    email;
    firstName;
    lastName;
    password;
    phone;
    picName;
    picPATH;
    salary;
    username;
}

export class Assets{
    box;
    bank;
    Debtors;
    fixedAssets;
}

export class Liabilities{
    capital;
    loans;
    creditors;
}

