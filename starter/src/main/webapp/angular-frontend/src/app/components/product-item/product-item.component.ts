import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  selectedAmount = 1;

  @Input() product: Product;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      url: '',
    };
  }

  ngOnInit(): void {}

  onAdd(product: {}) {
    this.addToCart.emit({
      product,
      amount: this.selectedAmount,
    });
  }
}
