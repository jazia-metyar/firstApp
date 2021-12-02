import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategComponentComponent } from './categ-component/categ-component.component';
import { ProductComponent } from './product/product.component';
import { ModifyComponent } from './modify/modify.component';
import { CreateComponent } from './create/create.component';
import { CreateProdComponent } from './create-prod/create-prod.component';
import { ModifyProdComponent } from './modify-prod/modify-prod.component';
import { DesignComponent } from './design/design.component';
import { HomeComponent } from './shared/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonComponent } from './person/person/person.component';
import { ModifPersonComponent } from './person/modif-person/modif-person.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import { CommandeComponent } from './commande/commande/commande.component';


@NgModule({  
  declarations: [
    AppComponent,
    CategComponentComponent,
    ProductComponent,
    ModifyComponent,
    CreateComponent,
    CreateProdComponent,
    ModifyProdComponent,
    DesignComponent,
    HomeComponent,
    DashboardComponent,
    PersonComponent,
    ModifPersonComponent,
    CreatePersonComponent,
    CommandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
