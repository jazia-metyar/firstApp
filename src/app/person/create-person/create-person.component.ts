import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../../Services/person-service.service';
import { person } from '../../person';
import {
  ActivatedRoute,
  ActivationEnd,
  ParamMap,
  Router,
} from '@angular/router';
@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  newPerson: person = new person();
   selectedId: any;
  constructor(
    private personService: PersonServiceService,
    private route: Router,
    private activRoute: ActivatedRoute
  ) {}
  ngOnInit() {}

      addCategory(): void {
        this.personService.create(this.newPerson)
          .subscribe(data =>  this.route.navigate(['/person']), error => console.log(error));
        
      
      }
    

}
