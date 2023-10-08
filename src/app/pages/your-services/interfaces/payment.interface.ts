export interface PaymentInterface {
  id: number;
  dueDate: string; // Προθεσμία πληρωμής
  paymentDate: string; // Ημερομηνία που πληρώθηκε ο λογαριασμός
  amount: number; // Οφειλούμενο ποσό
  period: string; // Περίοδος λογαριασμού
  proofUrl: string; // Αποδεικτικό πληρωμής
}
