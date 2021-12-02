import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import { Categorie } from '../Categorie';
import { CategoryServiceService } from '../Services/category-service.service';
import { ProductCls  } from '../ProductCls';
import { ProductServiceService } from '../Services/product-service.service';
@Component({
  selector: 'app-modify-prod',
  templateUrl: './modify-prod.component.html',
  styleUrls: ['./modify-prod.component.css']
})
export class ModifyProdComponent implements OnInit {
  category:Categorie = new Categorie();

  newProduct: ProductCls = new ProductCls();
  selectedId: any;
  urlId: any;
  categoryId:any;
  constructor(
    private categoryService: CategoryServiceService,
    private productService: ProductServiceService ,
    private route: Router,
    private activRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activRoute.paramMap.subscribe((param: ParamMap) => {
      this.urlId = param.get('id');
    });
    this.fetchProductbyId();
  }
  fetchProductbyId() {
    this.productService.getProduct(this.urlId).subscribe((data: {}) => {
      this.newProduct = data;
      this.categoryId=this.newProduct.category?.id
      console.log(this.newProduct)
    });
  }


  edite(){
    
        console.log("categoryId"+this.categoryId);

          this.productService.update(this.urlId,this.newProduct).subscribe((data: {}) => {
        
        
          this.route.navigate(['/products',this.newProduct.category?.id]);
        });  
  
  }

  cancel(){

    this.route.navigate(['/products',this.newProduct.category?.id]);
  }

}
