import { Categorie } from "./Categorie";

export class ProductCls {
  constructor(public id?: number, public name?: string,public qt?:number,
    public dispo?:boolean,
    public dateCreation?: Date,
    public dateModify?:Date,
     public category?:Categorie) {}
}