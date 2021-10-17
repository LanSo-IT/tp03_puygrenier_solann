import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../product';
import { WebServiceProductService } from '../web-service-product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  @Input() filterPrice = 0;
  products = new Array<Product>();
  constructor( private productService:WebServiceProductService){
    productService.getProducts().subscribe(response =>
      {
        this.products = response.map(item =>
        {
          return new Product(
              item.id,
              item.name,
              item.price
          );
        }).filter(data => data.price > this.filterPrice );
      });
  }

  ngOnInit(): void {
  }

  // TODO : FILTER TO REMOVE !
}
