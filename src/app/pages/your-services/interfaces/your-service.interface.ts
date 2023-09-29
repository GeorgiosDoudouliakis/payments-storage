/* Place your interface imports here */
import { PaymentInterface } from "./payment.interface";

export interface YourServiceInterface {
  id: number;
  name: string;
  imageUrl: string;
  onlinePaymentLink: string;
  payments: PaymentInterface[];
}
