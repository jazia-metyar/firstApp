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
  selector: 'app-categ-component',
  templateUrl: './categ-component.component.html',
  styleUrls: ['./categ-component.component.css']
})
export class CategComponentComponent implements OnInit {
  categoriesTab: any = [];
  newCategory = ''; 
  selectedId: any;
  
  constructor(
    private categoryService: CategoryServiceService,
    private route: Router,
    private activRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryService.getCategories().subscribe((data: {}) => {
      this.categoriesTab = data;
      console.log(this.categoriesTab)
    });
  }

  remove(data: any) {
    this.categoryService.delete(data).subscribe((res) => {
      this.fetchCategories();
    });
  }

  goToDetails(x: any) {
    this.route.navigate(['/products', x]);
  }
  goToEdite(Y: any) {
    this.route.navigate(['/modify', Y]);
  }
}
