import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import { CommandeService } from '../../Services/commande.service';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  comdTab: any = [];
  newCategory = ''; 
  selectedId: any;
  
  constructor(
    private commandeService: CommandeService,
    private route: Router,
    private activRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchAll();
  }

  fetchAll() {
    this.commandeService.getAll().subscribe((data: {}) => {
      this.comdTab = data;
      console.log(this.comdTab)
    });
  }

  remove(data: any) {
    this.commandeService.delete(data).subscribe((res) => {
      this.fetchAll();
    });
  }

  goToDetails(x: any) {
    this.route.navigate(['/products', x]);
  }
  goToEdite(Y: any) {
    this.route.navigate(['/modify', Y]);
  }
}
