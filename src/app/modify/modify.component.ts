import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import { Categorie } from '../Categorie';
import { CategoryServiceService } from '../Services/category-service.service';
@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  newCategory: Categorie = new Categorie();
  selectedId: any;
  urlId: any;
  constructor(
    private categoryService: CategoryServiceService,
    private route: Router,
    private activRoute: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.activRoute.paramMap.subscribe((param: ParamMap) => {
      this.urlId = param.get('id');
    });
    this.fetchCategorybyId();
  }

  fetchCategorybyId() {
    this.categoryService.getCategory(this.urlId).subscribe((data: {}) => {
      this.newCategory = data;
      console.log(this.newCategory)
    });
  }


  modifyCateg(){
    this.categoryService.update(this.urlId,this.newCategory).subscribe((data: {}) => {
      console.log(this.newCategory)
      this.route.navigate(['/categories']);
    });  
  }
  

 



}
