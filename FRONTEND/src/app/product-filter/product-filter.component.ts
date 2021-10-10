import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { WebServiceProductService } from '../web-service-product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})

export class ProductFilterComponent implements OnInit{//
  products = new Array<Product>();
  constructor( productService:WebServiceProductService){

  productService.getProducts().subscribe(response =>
    {
      this.products = response.map(item =>
      {
        return new Product(
            item.id,
            item.name,
            item.price
        );
      }).filter(data => data.price <10 );
    });
  }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    return "0-"+value+"€";
  }

  getMinimumPrice():number{
    let minimum:number = this.products[0].price;
    //for(let item in this.products) if
    this.products.forEach(element => {
      if(minimum > element.price) minimum = element.price;
    });
    return minimum;
  }
  getMaximumPrice():number{
    let maximum:number = this.products[0].price;
    //for(let item in this.products) if
    this.products.forEach(element => {
      if(maximum < element.price) maximum = element.price;
    });
    return maximum;
  }

}
