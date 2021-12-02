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
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newCategory: Categorie = new Categorie(); 
   selectedId: any;
  constructor(
    private categoryService: CategoryServiceService,
    private route: Router,
    private activRoute: ActivatedRoute
  ) {}
  ngOnInit() {
  }
 /* addCategory() {
    console.log(this.newCategory)
    this.categoryService.create(this.newCategory).subscribe((result1)=>{
      console.warn("result",result1);
    })
    console.warn(this.newCategory);
      }*/
     
    
      addCategory(): void {
        this.categoryService.create(this.newCategory)
          .subscribe(data =>  this.route.navigate(['/categories']), error => console.log(error));
        
      
      }
    

}
