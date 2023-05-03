//TODO: Add the contents of the order class
export class Order {
  id: number;
  name: string;
  address: string;
  creditCart: string;
  total: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.address = '';
    this.creditCart = '';
    this.total = 0;
  }
}
