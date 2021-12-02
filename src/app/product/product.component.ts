import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import { Observable} from 'rxjs';
import { ProductServiceService } from '../Services/product-service.service';
import { CategoryServiceService } from '../Services/category-service.service';
import * as XLSX from "xlsx";
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import 'jspdf-autotable';
import { ProductCls } from '../ProductCls';
import { Categorie } from '../Categorie';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productsTab: any = [];
  categ:Categorie=new Categorie();
  newProduct = '';
  selectedId: any;
  urlId: any;
 
  title = "export to excel";
  fileName: any;
  datapdf: any;
  dataTopdf: any;
  constructor(
    private productService: ProductServiceService,
    private categoryServiceService: CategoryServiceService,
    private route: Router,
    private activRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activRoute.paramMap.subscribe((param: ParamMap) => {
      this.urlId = param.get('id');
    });
    this.fetchProducts();
  // this.productsTab=this.categ.produits;
   
    this.fileName = "Categ :" + this.urlId + ":Products.xlsx"

    this.datapdf = document.getElementById('excel-table');
}

  fetchProducts() {
      this.productService.getProductsByCatg(this.urlId).subscribe((data: {}) => {
       this.productsTab = data;
       console.log(this.productsTab)
     });
/*
    this.categoryServiceService.getCategory(this.urlId).subscribe((data: {}) => {
      console.log(data);
      this.categ=data;
      console.log(this.productsTab)
    });
  */
  }

  remove(data: any) {
    this.productService.delete(data).subscribe((res) => {
      this.fetchProducts();
    });
  }


  goToEdite(Y: any) {
    this.route.navigate(['/modifyprod', Y]);
  }

  goToCreate() {
    this.route.navigate(['/createprod', this.urlId]);
  }








  /*
    head = [['Name', 'QT', 'Date Creation', 'Date Modification']]
  
    createPdf() {
      var prepare=[];
      var doc = new jspdf();
  
      doc.setFontSize(18);
      doc.text('My PDF Table', 11, 8);
      doc.setFontSize(11);
      doc.setTextColor(100);
      this.dataTopdf =this.productsTab;
      this.dataTopdf.array.forEach((e:ProductCls) => {
        var tempObj =[];
        tempObj.push(e.name);
        tempObj.push(e.qt);
        tempObj.push( e.dispo);
        tempObj.push(e.Date_creation);
        tempObj.push(e.Date_modify);
        prepare.push(tempObj);
      });
  
  
      (doc as any).autoTable({
        head: this.head,
        body: prepare,
        theme: 'plain',
       
      })
  
      // Open PDF document in new tab
      doc.output('dataurlnewwindow')
  
      // Download PDF document  
      doc.save('table.pdf');
    }
  */
}





