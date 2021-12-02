import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import {  ProductCls} from '../ProductCls';
import { ProductServiceService } from '../Services/product-service.service';
import { CategoryServiceService } from '../Services/category-service.service';
import { Categorie } from '../Categorie';
@Component({
  selector: 'app-create-prod',
  templateUrl: './create-prod.component.html',
  styleUrls: ['./create-prod.component.css']
})
export class CreateProdComponent implements OnInit {

  newProduct: ProductCls = new ProductCls(); 
   selectedId: any;
   category:Categorie = new Categorie();
   idCateg:any;
  constructor(
    private productService: ProductServiceService,
    private categoryService: CategoryServiceService,
    private route: Router,
    private activRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activRoute.paramMap.subscribe((param: ParamMap) => {
      this.idCateg = param.get('id');
    });
  }

  addProduct(): void {
    this.categoryService.getCategory(this.idCateg).subscribe((data: {}) => {
      this.category = data;
      console.log(this.category)
    
    this.newProduct.category=this.category
    this.productService.create(this.newProduct)
      .subscribe(data =>  this.route.navigate(['/products',this.idCateg]),
       error => console.log(error));
    
      });
  }

}
