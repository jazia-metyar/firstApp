import { Component, OnInit } from '@angular/core';
import {PersonServiceService } from '../../Services/person-service.service';
import {
          ActivatedRoute,
          ParamMap,
          Router,
       } from '@angular/router';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personTab: any = [];
  selectedId: any;
  urlId: any;
 

 
  constructor(
    private personService:PersonServiceService ,
    private route: Router,
    private activRoute: ActivatedRoute
  ) { }

  
  ngOnInit() {
    this.fetchAll();
  }

  fetchAll() {
    this.personService.getPersons().subscribe((data: {}) => {
      this.personTab = data;
      console.log(this.personTab)
    });
  }

  remove(data: any) {
    this.personService.delete(data).subscribe((res) => {
      this.fetchAll();
    });
  }

 
  goToEdite(Y: any) {
    this.route.navigate(['/modifypers', Y]);
  }


}
