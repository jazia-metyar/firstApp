import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategComponentComponent } from './categ-component/categ-component.component';
import { ModifyComponent } from './modify/modify.component';
import { CreateComponent } from './create/create.component';
import { ProductComponent } from './product/product.component';
import { CreateProdComponent } from './create-prod/create-prod.component';
import { ModifyProdComponent } from './modify-prod/modify-prod.component';
import { DesignComponent } from './design/design.component';
import { HomeComponent } from './shared/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonComponent } from './person/person/person.component';
import { ModifPersonComponent } from './person/modif-person/modif-person.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import { CommandeComponent } from './commande/commande/commande.component';




const routes: Routes = [
{path:'' ,redirectTo:'dashboard',pathMatch:'full'},
{path:'categories' , component:CategComponentComponent},
{path:'modify/:id' , component:ModifyComponent},
{path:'create' , component:CreateComponent},
{path:'products/:id' , component:ProductComponent},
{path:'createprod/:id' , component:CreateProdComponent},
{path:'modifyprod/:id' , component:ModifyProdComponent},
{path:'design' , component:DesignComponent},
{path:'home' , component:HomeComponent},
{path:'dashboard' , component:DashboardComponent},
{path:'person' , component:PersonComponent},
{path:'modifypers/:id' , component:ModifPersonComponent},
{path:'createpers' , component:CreatePersonComponent},
{path:'commandes' , component:CommandeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
