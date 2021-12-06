import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { CategoryServiceService } from '../Services/category-service.service';
import {ProductServiceService } from '../Services/product-service.service';
import { CommandeService } from '../Services/commande.service';
import { PersonServiceService } from '../Services/person-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  numcateg:any=0;
  numprod:any=0;
  numpers:any=0;
  numcomd:any=0;
  categoriesTab: any = [];
  prodTab: any = [];
  persTab: any = [];
  comdTab: any = [];
  newCategory = ''; 
  selectedId: any;
  
  constructor(
    private categoryService: CategoryServiceService,
    private productServiceService : ProductServiceService,
    private commandeService : CommandeService,
    private personServiceService : PersonServiceService,
    private route: Router,
    private activRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchCategories();
    this.fetchProducts();
    this.fetchPers();
    this.fetchComd();
  }

  fetchCategories() {
    this.categoryService.getCategories().subscribe((data: {}) => {
      this.categoriesTab = data;
      this.numcateg=this.categoriesTab.length;
      console.log(this.categoriesTab)
    });
  }
   fetchProducts() {
    this.productServiceService.getProducts().subscribe((data: {}) => {
      this.prodTab = data;
      this.numprod=this.prodTab.length;
      console.log(this.prodTab)
    });
  }
  fetchPers() {
    this.personServiceService.getPersons().subscribe((data: {}) => {
      this.persTab = data;
      this.numpers=this.persTab.length;
      console.log(this.persTab)
    });
  }fetchComd() {
    this.commandeService.getAll().subscribe((data: {}) => {
      this.categoriesTab = data;
      this.numcomd=this.categoriesTab.length;
      console.log(this.categoriesTab)
    });
  }

}