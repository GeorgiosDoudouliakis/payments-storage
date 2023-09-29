export interface PaymentInterface {
  id: number;
  dueDate: string; // Προθεσμία πληρωμής
  paymentDate: string; // Ημερομηνία που πληρώθηκε ο λογαριασμός
  amount: number; // Οφειλούμενο ποσό
  month: string; // Μήνας λογαριασμού
  paymentProofUrl: string; // Αποδεικτικό πληρωμής
}
