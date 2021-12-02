import { person } from "./person";
import { ProductCls } from "./ProductCls";

export class commande {
  constructor(public id?: number, 
    public dateCreation?: Date,
    public price?:number,
    public product?:ProductCls,
    public person?:person
    ) {}
}