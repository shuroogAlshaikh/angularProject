import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: any;
  total: number = 0;
  customerName: string = '';
  customerAddress: string = '';
  customerCreditCard: string = '';

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();
    this.total = this.getCartTotal(this.cartProducts);
  }

  getCartTotal(cart: any): number {
    //TODO Sum up total cart price
    let sum = 0;
    for (let product of cart) {
      sum += product.price * product.amount;
    }
    return sum;
  }

  modelChanged(product: any): void {
    const productInCart = this.cartProducts.find(
      (cartProduct: any) => cartProduct.id === product.id
    );

    if (product.amount === 0) {
      let updatedCart = this.cartProducts.filter(
        (cartProduct: any) => cartProduct.id !== product.id
      );
      this.cartProducts = this.cartService.updateCart(updatedCart);
      alert('Removed from cart!');
    }

    productInCart.amount = product.amount;

    this.total = this.getCartTotal(this.cartProducts);
  }

  onSubmit() {
    var order = new Order();
    order.name = this.customerName;
    order.total = this.total;

    //TODO: Submit order - call the service
  this.cartService.submitOrder(order).subscribe(
      (response)=> {console.log("submit Order")},
      (error)=>console.log("error")
    );

    this.cartService.clearCart();
    this.cartProducts = [];
    this.router.navigate([
      '/confirmation',
      { customerName: this.customerName, total: this.total },
    ]);
  }

  // util
  allowOnlyNumbers(event: any): boolean {
    const characterCode = event.which ? event.which : event.keyCode;
    return characterCode > 31 && (characterCode < 48 || characterCode > 57)
      ? false
      : true;
  }
}
