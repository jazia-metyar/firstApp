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
  selector: 'app-modif-person',
  templateUrl: './modif-person.component.html',
  styleUrls: ['./modif-person.component.css']
})
export class ModifPersonComponent implements OnInit {

  newPerson: person = new person();
  selectedId: any;
  urlId: any;
  constructor(
    private personService: PersonServiceService,
    private route: Router,
    private activRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activRoute.paramMap.subscribe((param: ParamMap) => {
      this.urlId = param.get('id');
    });
    this.fetchbyId();
  }
  fetchbyId() {
    this.personService.getPerson(this.urlId).subscribe((data: {}) => {
      this.newPerson = data;
      console.log(this.newPerson)
    });
  }


  modify(){
    this.personService.update(this.urlId,this.newPerson).subscribe((data: {}) => {
      console.log(this.newPerson)
      this.route.navigate(['/person']);
    });  
  }
  

 



}
