type Contact = {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
};

type TItem = {
  vehicleType: string;
  vehicleName: string;
  pickupDate: string;
  returnDate: string;
  model: string;
  rent: number;
};

export interface Invoice {
  contact: Contact;
  car: TItem;
  subtotal: number;
  invoiceNumber: string;
}
