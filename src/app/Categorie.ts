import { ProductCls } from "./ProductCls";

export class Categorie {
  constructor(public id?: number, public name?: string,public qt?:number,
    public dateCreation?: Date,
    public dateModify?:Date,
    public produits?:ProductCls) {}
}